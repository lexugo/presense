import { signOut } from 'braise'

import { useSideEffect } from 'neon'

import Choice, { Between } from 'components/select'
import Option from "components/option"

export default function SignOut() {
	useSideEffect(signOut, [])

	return (
		<div className='goodbye'>
			<form className='questions'>
				<Choice>
					Goodbye 👋
					<p className='info'>It's been an honor</p>
					<Between>
						<Option href='/sign/in'>Sign back in?</Option>
					</Between>
				</Choice>
			</form>
		</div>
	)
}
