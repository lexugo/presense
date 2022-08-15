import useAuth from 'hooks/useAuth'

import Choice, { Between } from 'components/select'
import Option from "components/option"

export  default function SignIn() {
	useAuth()

	return (
		<div className='welcome'>
			<form className='questions'>
				<Choice>
					Welcome 👋
					<p className='info'>Your notes will be saved and shared across devices</p>
					<Between>
						<Option href='/notice'>Take notes.</Option>
						<Option href='/sign/out'>Sign out.</Option>
						<Option href='/notes'>Or, read the previous notes.</Option>
					</Between>
				</Choice>
			</form>
		</div>
	)
}
