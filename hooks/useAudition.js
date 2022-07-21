import { useState } from 'react'
import { useDevice } from 'neon'

export default function useAudition() {
	const [questions, setQuestions] = useState({})

	const mobile = useDevice('mobile')

	function about(question) {
		const index = Object.keys(questions).indexOf(question)

		function next(event) {
			const next = Object.values(questions)[index + 1]

			if (!next)
				return submit(event) // Submit form when skipping the last question

			event.preventDefault()
			focus(next)
		}

		function submit(event) {
			const form = questions[question].form

			event.preventDefault()
			form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
		}

		return {
			key: question,
			name: question,
			ref: component => setQuestions(questions => !questions[question] ? { ...questions, [question]: component } : questions),

			onSkip: next,
			onSubmit: next,
			tabIndex: index + 1,
		}
	}

	function focus(question) {
		const element = typeof question === 'string' || question instanceof String
			? questions[question]
			: question

		if (mobile) {
			element?.focus({ preventScroll: true })
			element?.parentElement?.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
		else {
			element?.focus({ preventScroll: true })
			element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
		}
	}

	return {
		questions,
		about,
		focus
	}
}
