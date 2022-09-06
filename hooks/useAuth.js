
import { useUser } from 'braise'

export default function useAuth() {
	const user = useUser()

	return {
		authenticated: !!user,
		id: user?.uid,
	}
}


