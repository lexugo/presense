import { getApp } from 'firebase/app'
import { getFirestore, collection, Timestamp, addDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export async function set(intent) {
	const firestore = getFirestore()
	const auth = getAuth(getApp())

	const intentions = collection(firestore, 'intentions')

	const reference = await addDoc(intentions, {
		...serialized(intent),
		set: {
			on: Timestamp.now(),
			by: auth.currentUser.uid
		}
	})

	return reference.id
}

function serialized(intent) {
	if (typeof intent === 'string' || intent instanceof String)
		return { intent }

	return {
		...(intent.goal) && { goal: intent.goal },
		...(intent.intent) && { intent: intent.intent }
	}
}
