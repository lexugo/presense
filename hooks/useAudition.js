import { useState } from 'react'

export default function useAudition() {
	const [questions, setQuestions] = useState({})

	function about(question) {
		const index = Object.keys(questions).indexOf(question)

		function next(event) {
			const next = Object.values(questions)[index + 1]

			if (!next)
				return submit(event) // Submit form when skipping the last question

			event.preventDefault()
			next.focus()
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

	return {
		questions,
		about
	}
}
