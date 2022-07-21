import { addDoc, collection, getFirestore, Timestamp } from 'firebase/firestore'

export async function record(note) {
	const firestore = getFirestore()
	const notes = collection(firestore, 'notes')

	return await addDoc(notes, {
		...serialized(note),
		recorded: {
			on: Timestamp.now()
			// TODO: authentication
		}
	})
}

function serialized(note) {
	if (typeof note === 'string' || note instanceof String)
		return { content: note }

	return note
}
