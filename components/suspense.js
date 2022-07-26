import React, { useState } from 'react'

import { Suspensful } from 'hooks/useSuspense'

export default function Suspense({ children, fallback }) {
	const [suspended, suspend] = useState(false)

	return (
		<Suspensful.Provider value={[suspended, suspend]}>
			{ suspended ? fallback : children }
		</Suspensful.Provider>
	)
}

export function suspensful(Component) {
	return function Suspense({ props }) {
		const [suspended, suspend] = useState(false)
		return (
			<Suspensful.Provider value={[suspended, suspend]}>
				<Component {...props} />
			</Suspensful.Provider>
		)
	}
}
