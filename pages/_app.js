import { useFirebase } from 'libs/braise'
import useAuth from 'hooks/useAuth'

import Brand from 'components/brand'
import { Safe } from 'neon'

import 'styles/global.sass'

export default function Layout({ Component, pageProps: props }) {
	useFirebase()
	useAuth()

	return (
		<Safe>
			<Brand />
			<Component {...props} />
		</Safe>
	)
}
