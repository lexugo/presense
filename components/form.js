import Button from 'components/button'

export default function Form({ onAbort, onPrevious, onContinue, onSubmit, children }) {
	return (
		<form>
			{ children }
			<nav>
				{ onPrevious && <Button onClick={onPrevious} className='previous'>Reculer</Button> }
				{ !onPrevious && onAbort && <Button onClick={onAbort} className='abort'>Annuler</Button> }
				{ onContinue && <Button onClick={onContinue} className='continue'>Continuer</Button> }
				{ onSubmit && <Button type='submit' onClick={onSubmit} className='submit'>Soumettre</Button> }
			</nav>
		</form>
	)
}
