import { useClasses, useSuspense } from 'neon'

import Head from 'next/head'

export default function Brand() {
	const { suspending } = useSuspense()

	const classNames = useClasses(suspending && 'suspended', 'brand')
	return (
		<header>
			<Head><title>Presense</title></Head>
			<h1 className={classNames}>Pre<span className='sense'>sense</span></h1>
		</header>
	)
}
