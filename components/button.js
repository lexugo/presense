import { memo } from 'react'

import { Anchor } from 'neon'

function Button({ onClick, children, ...props }) {
	return typeof onClick === 'string'
		? <Anchor href={onClick} {...props}>{ children }</Anchor>
		: <button type='button' onClick={onClick} {...props}>{ children }</button>
}

export default memo(Button)
