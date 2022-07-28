import { memo } from 'react'
import { Anchor } from 'neon'

function Option({ href, onChoose, children: label }) {
	// TODO: Create useKeyPress hook

	return href
		? <Anchor href={href} onClick={onChoose} className='option'>{ label }</Anchor>
		: <button type='submit' onClick={onChoose} className='option'>{ label }</button>
}

export default memo(Option)
