import Choice, { Between } from 'components/select'
import { unindexed, Anchor } from 'neon'

function Intended({ intent }) {
	return (
		<nav className='thank you'>
			<Choice>
				Bonne chance! Voulez-vous prendre une note?
				<Between>
					<Anchor href='/notice'>Oui! Inscrire une note</Anchor>
					<Anchor href='/notes'>Lires les anciennes notes</Anchor>
					<Anchor href='/intent'>Ou, prendre une autre intention</Anchor>
				</Between>
			</Choice>
		</nav>
	)
}

Intended.getInitialProps = ({ query: { id } }) => ({ note: id })

export default unindexed(Intended)
