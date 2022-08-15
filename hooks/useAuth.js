import { signInWithGoogle } from 'braise'

import { useSideEffect } from 'neon'
import { useUser } from 'braise'

export default function useAuth() {
	const user = useUser()

	useSideEffect(signInWithGoogle, []) // Enforce login

	return {
		authenticated: !!user,
		id: user?.uid,
	}
}


