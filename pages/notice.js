import { record } from 'services/notes'

import { useState } from 'react'

import Brand from 'components/brand'
import Question from 'components/question'

export default function Notice() {
	const [note, setNote] = useState()
	const [context, setContext] = useState()

	async function submit(note) {
		await record(note) // TODO: handle error
		clear()
	}

	function clear() { setNote(undefined) }

	return (
		<div className='notice'>
			<Brand />
			<form className='questions'>
				<Question
					name='note'
					required
					answer={note}
					onChange={setNote}
					onSubmit={submit}
					placeholder='I was lost in a daydream'
				>
					Hello, what did you <span className='keyword'>notice</span> today?
				</Question>
				<Question
					name='context'
					answer={context}
					onChange={setContext}
					onSubmit={submit}
					placeholder="Yet, I don't remember where I was beforehand"
				>
					What was happening in your mind, or around you, at the time?
				</Question>
			</form>

		</div>
	)
}
