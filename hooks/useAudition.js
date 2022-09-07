import { useCallback, useEffect, useState } from 'react'
import useFrom from './useFrom'

export default function useAudition({ onAbort, onSubmit }) {
	const [questions, setQuestions] = useState({})
	const { value: focused, next, previous } = useFrom(questions)

	const onPrevious = useCallback(handled(previous), [previous])
	const onContinue = useCallback(handled(next), [next])

	function about(question) {
		return {
			name: question,
			className: questions[question] === focused && 'selected',
			ref: component => setQuestions(questions => !questions[question] ? { ...questions, [question]: component } : questions),

			onSkip: onContinue || onSubmit,
			onSubmit: onContinue || onSubmit,
		}
	}

	useEffect(() => focus(focused), [focused]) // Autofocus the selected input
	return {
		audition: {
			onSubmit,
			onAbort,
			onPrevious,
			onContinue
		},
		questions,
		about,
	}
}

function focus(question) {
	question?.focus({ preventScroll: true })
	question?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function handled(handler) {
	if (!handler) return
	return function (event) {
		event.preventDefault()
		handler(event)
	}
}

