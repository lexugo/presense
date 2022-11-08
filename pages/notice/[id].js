import Note from 'components/note'
import Choice, { Between } from 'components/select'
import { unindexed, Anchor } from 'neon'

function Noticed({ note }) {
	return (
		<nav className='thank you'>
			<Choice>
				Merci!
				Voulez-vous prendre une nouvelle note?
				<Note id={note} />
				<Between>
					<Anchor href='/notice'>Oui! Inscrire une note</Anchor>
					<Anchor href='/notes'>Lires les anciennes notes</Anchor>
					<Anchor href='/intent'>Ou, prendre une intention</Anchor>
				</Between>
			</Choice>
		</nav>
	)
}

Noticed.getInitialProps = ({ query: { id } }) => ({ note: id })

export default unindexed(Noticed)
