import Head from 'next/head'

export default function Brand() {
	return (
		<header>
			<Head><title>Presense</title></Head>
			<h1 className='brand'>Pre<span className='sense'>sense</span></h1>
		</header>
	)
}
