import { forwardRef, memo } from 'react'
import { Anchor } from 'neon'
import Keypress from './keypress'

function Option({ href, onChoose, press, children: label }, ref) {
	// TODO: Create useKeyPress hook

	const button = href
		? <Anchor href={href} onClick={onChoose} ref={ref}>{ label }</Anchor>
		: <button type='button' onClick={onChoose} ref={ref}>{ label }</button>
	return (
		<div className='option'>
			{ button }
			{ press && <Keypress>{ press }</Keypress> }
		</div>
	)
}

export default forwardRef(Option)
