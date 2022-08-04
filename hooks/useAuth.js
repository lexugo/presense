import { getApp, getApps } from 'firebase/app'
import { getAuth, signInAnonymously, getRedirectResult, signInWithPopup, signInWithRedirect, GoogleAuthProvider, FacebookAuthProvider, signOut, linkWithRedirect } from 'firebase/auth'
import { useState, useEffect } from 'react'


export default function useAuth() {
	const [user, setUser] = useState(getUser)

	useEffect(() => {
		const auth = getAuth()

		if (!auth.currentUser)
			signInAnonymously(auth)

		return auth.onAuthStateChanged(setUser)
	}, [])

	return {
		authenticated: !!user,
		id: user?.uid,
		name: user?.displayName ?? 'anonymous'
	}
}

function signInWith(provider) {
	return async function(auth) {
		return auth.currentUser
			? linkWithRedirect(auth.currentUser, provider)
			: signInWithRedirect(auth, provider)
	}
}

function getUser() {
	if (getApps().length)
		return getAuth().currentUser
}
