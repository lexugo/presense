import { useClasses } from 'neon'
import { forwardRef } from 'react'

import Press from 'components/keypress'

function Question({ name, answer, onAnswer, onSkip, onSubmit, required, className, children: label, when,...props}, ref) {
	const classNames = useClasses(className, required && 'required', 'question')

	const skippable = !required
	const submittable = required || answer
	function keyDown(event) {
		if (event.key === 'Tab' && onSkip) skippable ? skip(event) : event.preventDefault()
		if (event.key === 'Enter' && onSubmit) submittable ? onSubmit(event) : event.preventDefault()
	}

	function skip(event) {
		onAnswer(undefined) // Clear answer when skipping
		onSkip(event)
	}

	if (when === false) return null
	return (
		<div className={classNames}>
			<label htmlFor={name}>{ label }</label>
			<input type='text'
				name={name}
				ref={ref}
				value={answer ?? ''}
				onKeyDown={keyDown}
				onChange={({ target: { value }}) => onAnswer(value)}
				onSubmit={onSubmit}
				autoComplete='off'
				{...props}
			/>
			<div className='actions'>
				<Submit disabled={!submittable} onSubmit={onSubmit} />
				{ skippable && <Skip onSkip={skip} /> }
			</div>
		</div>
	)
}

function Submit({ onSubmit, disabled }) {
	return (
		<div className='submit'>
			<button type='submit' onClick={onSubmit} disabled={disabled}>Ok</button>
			<Press disabled={disabled}>Enter</Press>
		</div>
	)
}

function Skip({ onSkip, disabled }) {
	return (
		<div className='skip'>
			<button type='button' onClick={onSkip} disabled={disabled}>Skip</button>
			<Press disabled={disabled}>Tab</Press>
		</div>
	)
}

export default forwardRef(Question)
