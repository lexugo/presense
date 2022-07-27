import { useFirebase } from 'libs/braise'

import Brand from 'components/brand'
import { Safe } from 'neon'

import 'styles/global.sass'

export default function Layout({ Component, pageProps: props }) {
    useFirebase()

    return (
        <Safe>
            <Brand />
            <Component {...props} />
        </Safe>
    )
}
