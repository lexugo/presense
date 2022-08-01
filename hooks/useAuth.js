import { getAuth, signInAnonymously, getRedirectResult, signInWithPopup, signInWithRedirect, GoogleAuthProvider, FacebookAuthProvider, signOut, linkWithRedirect } from 'firebase/auth'


const google = new GoogleAuthProvider();

export default function useAuth() {
	const auth = getAuth()

	getRedirectResult(auth)
		.then((result) => {
			const credential = GoogleAuthProvider.credentialFromResult(result);
			if (credential) {
			// Accounts successfully linked.
			const user = result.user;
			console.log('Successfully linked user account: ', user);
			// ...
			}
		}).catch((error) => {
			// Handle Errors here.
			// ...
			console.log('Error linking user account: ', error);
		});

	console.log(auth)
	return {
		authenticated: !!auth.currentUser,
		id: auth.currentUser?.uid,
		name: auth.currentUser?.displayName,

		signInAnonymously: async (event) => {
			event.preventDefault()

			console.log('anon')
			await signInAnonymously(auth)
		},
		signInWithGoogle: () => signInWith(google)(auth),
		signOut: () => signOut(auth),
	}
}

function signInWith(provider) {
	return async function(auth) {
		return auth.currentUser
			? linkWithRedirect(auth.currentUser, provider)
			: signInWithRedirect(auth, provider)
	}
}
