import Choice, { Between } from 'components/select'
import { Anchor } from 'neon'

export default function Welcome() {
	return (
		<nav className='welcome'>
			<Choice>
				👋 Bienvenue! Voulez-vous...
				<Between>
					<Anchor href='/notice'>Inscrire une note</Anchor>
					<Anchor href='/notes'>Remémorer ses notes</Anchor>
				</Between>
			</Choice>
		</nav>
	)
}
