import { recall } from 'services/notes'

import { useEffect, useState } from 'react'

export default function useNote(id) {
	const [note, setNote] = useState()
	useEffect(() => { recall(id).then(setNote)}, [id])

	return note
}
