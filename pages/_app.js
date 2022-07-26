import { useFirebase } from 'libs/braise'

import Brand from 'components/brand'
import Panic from 'components/panic'

import 'styles/global.sass'

export default function Layout({ Component, pageProps: props }) {
    useFirebase()

    return (
        <>
            <Brand />
            <Panic fallback='failed'>
                <Component {...props} />
            </Panic>
        </>
    )
}
