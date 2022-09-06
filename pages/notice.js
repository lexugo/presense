import { record } from 'services/notes'

import { useEffect, useState } from 'react'
import useAudition from 'hooks/useAudition'
import { useSuspended, useRouting } from 'neon'

import Question from 'components/question'
import { suspenseful } from 'neon'

function Notice(_, suspended) {
	const { focus, questions, about } = useAudition()
	const { redirect } = useRouting()

	const [content, setContent] = useState()
	const [context, setContext] = useState()
	const [feelings, setFeelings] = useState()

	async function submit(event) {
		event.preventDefault()

		const reference = await record({
			content: content || 'I was lost in a daydream',
			context,
			feelings
		})
		await redirect(`/note/${reference}`)
	}

	useEffect(() => focus('note'), [questions, suspended]) // Autofocus the first question
	return (
		<form className='questions' onSubmit={useSuspended(submit)}>
			<Question
				{...about('note')}
				answer={content}
				onAnswer={setContent}
				placeholder='I was lost in a daydream'
				required
				disabled={suspended}
			>
				Hello, what did you <span className='keyword'>notice</span> today?
			</Question>
			<Question
				{...about('context')}
				answer={context}
				onAnswer={setContext}
				placeholder="Yet, I don't remember where I was beforehand"
				disabled={suspended}
			>
				What was happening in, or around, you at the time?
			</Question>
			<Question
				{...about('feelings')}
				answer={feelings}
				onAnswer={setFeelings}
				placeholder="Astray, until I regained presense"
				disabled={suspended}
			>
				How were you <span className='keyword'>feeling</span>?
			</Question>
		</form>
	)
}

export default suspenseful(Notice)
