import { record } from 'services/notes'

import { useState } from 'react'
import useAudition from 'hooks/useAudition'
import { useRouting } from 'neon'

import Form from 'components/form'
import Question from 'components/question'
import { suspenseful } from 'neon'

function Notice(_, suspended) {
	const { redirect } = useRouting()

	const [content, setContent] = useState()
	const [context, setContext] = useState()
	const [feelings, setFeelings] = useState()
	const { audition, about } = useAudition({
		onAbort: '/',
		onSubmit: async event => {
			event.preventDefault()

			const reference = await record({
				content: content || "J'étais perdu·e dans un rêve",
				context,
				feelings
			})
			await redirect(`/notice/${reference}`)
		}
	})

	return (
		<Form {...audition}>
			<Question {...about('note')}
				answer={content}
				onAnswer={setContent}
				placeholder="J'étais perdu·e dans un rêve..."
				disabled={suspended}
			>
				Qu'avez-vous <span className='keyword'>remarqué</span> aujourd'hui?
			</Question>
			<Question {...about('context')}
				answer={context}
				onAnswer={setContext}
				placeholder="Hors, je ne me souviens plus d'où j'étais..."
				disabled={suspended}
			>
				Que se passait-il <span className='keyword'>en</span> ou <span className='keyword'>autour</span> de vous à ce moment?
			</Question>
			<Question {...about('feelings')}
				answer={feelings}
				onAnswer={setFeelings}
				placeholder="Égaré·e, jusqu'à ce que je retrouve la présence..."
				disabled={suspended}
			>
				Comment vous <span className='keyword'>sentiez</span>-vous?
			</Question>
		</Form>
	)
}

export default suspenseful(Notice)
