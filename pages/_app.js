import { useFirebase } from 'libs/braise'

import Brand from 'components/brand'
import { Panic } from 'neon'

import 'styles/global.sass'

export default function Layout({ Component, pageProps: props }) {
    useFirebase()

    return (
        <>
            <Brand />
            <Panic fallback='Oops'>
                <Component {...props} />
            </Panic>
        </>
    )
}
