import { forwardRef } from 'react'
import { Anchor } from 'neon'

function Option({ href, value, onChoose, press, children: label }, ref) {
	function click(event) {
		if (onChoose) {
			event.preventDefault()
			onChoose(value)
		}
	}

	const props = { className: 'option', onClick: click, ref: ref, children: label }
	return (
		<div className='option'>
			{ href ? <Anchor href={href} {...props} /> : <button type='button' {...props} /> }
		</div>
	)
}

export default forwardRef(Option)
