import { useClasses } from 'neon'

import { forwardRef } from 'react'

function Question({ name, answer, onAnswer, onSkip, onSubmit, className, children: label, ...props }, ref) {
	function keyDown(event) {
		if (event.key === 'Tab' && onSkip) onSkip(event)
		if (event.key === 'Enter' && onSubmit) onSubmit(event)
	}

	const classNames = useClasses(className, 'question')
	return (
		<div className={classNames}>
			<label htmlFor={name}>{ label }</label>
			<input type='text'
				   name={name}
				   ref={ref}
				   value={answer ?? ''}
				   onKeyDown={keyDown}
				   onChange={({ target: { value }}) => onAnswer && onAnswer(value)}
				   onSubmit={onSubmit}
				   autoComplete='off'
				   { ...props }
			/>
		</div>
	)
}

export default forwardRef(Question)
