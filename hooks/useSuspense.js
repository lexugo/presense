import { useContext, createContext, useCallback, useState } from 'react'

export const Suspensful = createContext()

export default function useSuspense() {
	return useContext(Suspensful) ?? []
}

export function useSuspended(func) {
	const [suspended, suspend] = useSuspense()
	const [error, setError] = useState()

	return useCallback(async () => {
		try {
			suspend(true)
			await func()
		} catch(error) {
			console.error(error)
			setError(error)
		} finally {
			suspend(false)
		}
	}, [func])
}
