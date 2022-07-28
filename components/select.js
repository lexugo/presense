import { Anchor } from 'neon'

export default function Choice({ name, value, onAnswer, children }) {
	const label = children.slice(0, -1)
	const choices = children[children.length - 1]

	return (
		<div className='multiple choice question'>
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
