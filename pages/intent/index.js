import { useState } from 'react'
import { useRouter } from 'next/router'
import useAudition from 'hooks/useAudition'

import Form from 'components/form'
import Question from 'components/question'

export default function Intent() {
	const { back } = useRouter()

	const [intent, setIntent] = useState()
	const [goal, setGoal] = useState()
	const { audition, about } = useAudition({
		onAbort: back,
		onSubmit: async event => {
			event.preventDefault()
		}
	})

	return (
		<Form {...audition}>
			<Question {...about('intent')}
				required
				answer={intent}
				onAnswer={setIntent}
				placeholder='Je vais inspirer profondément...'
			>
				Maintenant, quelle est votre <span className='keyword'>intention</span> précise?
			</Question>
			<Question {...about('goal')}
				answer={goal}
				onAnswer={setGoal}
				placeholder="Avec l'instant présent comme objectif..."
			>
				Quel <span className='keyword'>but</span> souhaitez-vous atteindre
				avec cet <span className='keyword'>engagement</span>?
			</Question>
		</Form>
	)
}
