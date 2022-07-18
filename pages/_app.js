import { useFirebase } from 'libs/braise'

import 'styles/global.sass'

export default function Layout({ Component, pageProps: props }) {
    useFirebase()

    return <Component {...props} />
}
