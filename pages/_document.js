import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<meta name='application-name' content='Presense' />
				<meta name='description' content='Stay present' />

				<link rel="icon" type="image/png" sizes="192x192" href="icons/icon-192x192.png" />

				<link rel="manifest" href="/manifest.json" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
