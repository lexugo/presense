import Note from 'components/note'
import Choice, { Between } from 'components/select'
import Option from "components/option"
import useAuth from 'hooks/useAuth'

export default function Noticed({ note }) {
	useAuth()

	return (
		<div className='thank you'>
			<header>
				<Note id={note} />
			</header>
			<form className='questions'>
				<Choice>
					Thank you! Should we record another note?
					<Between>
						<Option href='/notice'>Yes, take another note.</Option>
						<Option href='/notes'>No, read the previous notes.</Option>
					</Between>
				</Choice>
			</form>
		</div>
	)
}

Noticed.getInitialProps = ({ query: { id } }) => ({ note: id })
