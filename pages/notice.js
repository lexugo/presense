import { record } from 'services/notes'

import { useEffect, useState } from 'react'
import useAudition from 'hooks/useAudition'

import Question from 'components/question'

export default function Notice() {
	const { focus, questions, about } = useAudition()
	const [note, setNote] = useState()
	const [context, setContext] = useState()
	const [feelings, setFeelings] = useState()

	async function submit(event) {
		event.preventDefault()

		await record({ // TODO: handle error
			content: note ?? 'I was lost in a daydream',
			...(context) && { context },
			...(feelings) && { feelings }
		})
		clear() // TODO: show confirmation
	}

	function clear() {
		setNote(undefined)
		setContext(undefined)
		setFeelings(undefined)

		focus('note')
	}

	useEffect(() => focus('note'), [questions]) // Autofocus the first question
	return (
		<form className='questions' onSubmit={submit}>
			<Question
				{...about('note')}
				answer={note}
				onChange={setNote}
				placeholder='I was lost in a daydream'
				required
			>
				Hello, what did you <span className='keyword'>notice</span> today?
			</Question>
			<Question
				{...about('context')}
				answer={context}
				onChange={setContext}
				placeholder="Yet, I don't remember where I was beforehand"
			>
				What was happening in, or around, you at the time?
			</Question>
			<Question
				{...about('feelings')}
				answer={feelings}
				onChange={setFeelings}
				placeholder="Astray, until I regained presense"
			>
				How were you <span className='keyword'>feeling</span>?
			</Question>
		</form>
	)
}
