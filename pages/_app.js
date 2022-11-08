import { signInWithGoogle, useFirebase } from 'libs/braise'

import Brand from 'components/brand'
import { Safe, useSideEffect } from 'neon'

import 'styles/global.sass'

export default function Layout({ Component, pageProps: props }) {
	useFirebase()
	useSideEffect(signInWithGoogle, []) // Enforce login

	return (
		<Safe>
			{/*<Brand />*/}
			<Component {...props} />
		</Safe>
	)
}
