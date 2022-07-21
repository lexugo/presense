import { useFirebase } from 'libs/braise'

import Brand from 'components/brand'

import 'styles/global.sass'

export default function Layout({ Component, pageProps: props }) {
    useFirebase()

    return (
        <>
            <Brand />
            <Component {...props} />
        </>
    )
}
