import { forwardRef } from 'react'

function Choice({ name, value, onAnswer, when, children }, ref) {
	if (when === false) return null

	const label = children.slice(0, -1)
	const choices = children[children.length - 1]

	return (
		<div className='multiple choice question' ref={ref}>
			<label htmlFor={name}>{ label }</label>
			<div className='options'>
				{ choices }
			</div>
		</div>
	)
}

export function Between({ children }) {
	return children
}

export default forwardRef(Choice)
