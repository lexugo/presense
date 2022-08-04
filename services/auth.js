import { getAuth } from 'firebase/auth'

export default function getUser() {
	const auth = getAuth(getApp())

	return auth.currentUser
}
