import { record } from 'services/notes'

import { useEffect, useState } from 'react'
import useAudition from 'hooks/useAudition'
import { useSuspended, useRouting, Suspense } from 'neon'

import Question from 'components/question'
import { suspenseful } from 'neon'
import useAuth from 'hooks/useAuth'

function Notice(_, suspended) {
	useAuth()
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
				onChange={setContent}
				placeholder='I was lost in a daydream'
				required
				disabled={suspended}
			>
				Hello, what did you <span className='keyword'>notice</span> today?
			</Question>
			<Question
				{...about('context')}
				answer={context}
				onChange={setContext}
				placeholder="Yet, I don't remember where I was beforehand"
				disabled={suspended}
			>
				What was happening in, or around, you at the time?
			</Question>
			<Question
				{...about('feelings')}
				answer={feelings}
				onChange={setFeelings}
				placeholder="Astray, until I regained presense"
				disabled={suspended}
			>
				How were you <span className='keyword'>feeling</span>?
			</Question>
		</form>
	)
}

export default suspenseful(Notice)
