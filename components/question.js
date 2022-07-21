import { useClasses } from 'neon'
import { forwardRef } from 'react'

import Press from './keypress'

function Question({ name, answer, onChange, onSkip, onSubmit, required, className, children: label, ...props}, ref) {

	const skippable = !required
	const submittable = required || answer
	function keyDown(event) {
		if (event.key === 'Tab' && onSkip)
			skippable ? onChange(undefined) & onSkip(event) : event.preventDefault()

		if (event.key === 'Enter' && onSubmit)
			submittable ? onSubmit(event) : event.preventDefault()
	}

	const classNames = useClasses(className, required && 'required', 'question')
	return (
		<div className={classNames}>
			<label htmlFor={name}>{ label }</label>
			<input type='text'
				name={name}
				ref={ref}
				value={answer ?? ''}
				onKeyDown={keyDown}
				onChange={({ target: { value }}) => onChange(value)}
				autoComplete='off'
				{...props}
			/>
			<div className='actions'>
				<Submit disabled={!submittable} />
				{ skippable && <Skip onSkip={onSkip} /> }
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
