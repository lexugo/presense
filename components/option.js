import { forwardRef, memo } from 'react'
import { Anchor } from 'neon'
import Keypress from './keypress'

function Option({ href, value, onChoose, press, children: label }, ref) {
	// TODO: Create useKeyPress hook

	function click(event) {
		if (!onChoose) return

		event.preventDefault()
		onChoose(value)
	}

	const button = href
		? <Anchor href={href} onClick={click} ref={ref}>{ label }</Anchor>
		: <button type='button' onClick={click} ref={ref}>{ label }</button>
	return (
		<div className='option'>
			{ button }
			{ press && <Keypress>{ press }</Keypress> }
		</div>
	)
}

export default forwardRef(Option)
