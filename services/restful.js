import { NextApiRequest, NextApiHandler } from 'next'

/**
 * Higher-order restful api request handler
 * @param {{ [method: string]: (request: NextApiRequest) => Promise<{ status?: number, body?: any } | any> }} handlers
 * @returns {NextApiHandler}
 */
export default function restful(handlers) {
	return async function handler(request, respond) {
		if (!request.method) throw new Error('Request method was not specified')

		try {
			const handler = handlers[request.method]
			if (handler) {
				const response = await handler(request)
				if (response) {
					respond // TODO: support headers
						.status(response.status ?? 200)
						.json(response.body ?? response)
				}
				else
					response.status(200).end()
			}
			else
				respond.status(405).send(`This endpoint does not support ${request.method} requests.`)
		} catch (error) {
			throw error
		}
	}
}
