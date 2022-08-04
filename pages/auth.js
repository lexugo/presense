import * as firebaseAdmin from "firebase-admin"

import useAuth from 'hooks/useAuth'

import Choice, { Between } from 'components/select'
import Option from "components/option"
import Question from 'components/question'
import useAudition from 'hooks/useAudition'

export default function Welcome() {
	const { focus, questions, about } = useAudition()
	const { signInWithGoogle, signInAnonymously, signOut } = useAuth()

	function email(event) {
		event.preventDefault()

		focus('name')
	}

	return (
		<form className='questions'>
			<Choice>
				Would you like to sign in?
				<p className='info'>Your notes will be save and shared across devices</p>
				<Between>
					<Option onChoose={signInWithGoogle} press='G'>Google</Option>
					<Option onChoose={signInAnonymously} press='A'>Anynymously</Option>
					<Option onChoose={signOut} press='S'>Sign out</Option>
				</Between>
			</Choice>
			<Question {...about('name')}>
				What is your name?
			</Question>
		</form>
	)
}
