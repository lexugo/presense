import { useState } from 'react'

import Brand from 'components/brand'
import Question from 'components/question'

export default function Notice() {
	const [note, setNote] = useState()

	function submit(note) {
		console.log(note) // TODO: save note to database
		clear()
	}

	function clear() { setNote(undefined) }

	return (
		<form className='notice'>
			<Brand />
			<Question
				name='note'
				answer={note}
				onChange={setNote}
				onSubmit={submit}
				placeholder='I was lost in a daydream'
			>
				Hello, what did you <span className='keyword'>notice</span> today?
			</Question>
		</form>
	)
}
