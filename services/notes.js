import { addDoc, collection, doc, getDoc, getDocs, getFirestore, Timestamp } from 'firebase/firestore'

export async function recall(id) {
	const firestore = getFirestore()

	if (!id) { // Recall all notes
		const notes = collection(firestore, 'notes')

		const snapshot = await getDocs(notes)
		const documents = snapshot.docs

		return documents.map(document => ({ id: document.id, ...document.data() }))
	}
	else {
		const document = doc(firestore, 'notes', id)
		const snapshot = await getDoc(document)

		if (snapshot.exists())
			return { id, ...snapshot.data() }
	}
}

export async function record(note) {
	const firestore = getFirestore()
	const notes = collection(firestore, 'notes')

	const reference = await addDoc(notes, {
		...serialized(note),
		recorded: {
			on: Timestamp.now()
			// TODO: authentication
		}
	})

	return reference.id
}

function serialized(note) {
	if (typeof note === 'string' || note instanceof String)
		return { content: note }

	return {
		content: note.content,
		...(note.context) && { context: note.context },
		...(note.feelings) && { feelings: note.feelings }
	}
}
