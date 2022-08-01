import { recall } from 'services/notes'
import { initializeApp, getApps } from 'firebase/app'

import Choice, { Between } from 'components/select'
import Option from "components/option"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Note() {
	const { id } = useRouter().query
	const [note, setNote] = useState()

	console.log(id, note)
	useEffect(() => { if (id) recall(id).then(setNote) }, [id])

	if (!note) return <div className='thank you'>loading</div>
	return (
		<div className='thank you'>
			<header>
				<p className='note'>
					<q>{ note.content }</q>
					<span className='author'>Hugo</span>
				</p>
			</header>
			<form className='questions'>
				<Choice>
					Thank you! Should we record another note?
					<Between>
						<Option href='/notice'>Yes, take another note.</Option>
						<Option href='/notes'>No, read the previous notes.</Option>
					</Between>
				</Choice>
			</form>
		</div>
	)
}

// export async function getStaticProps({ params: { id }}) {
// 	if (!getApps().length)
// 		initializeApp({
// 			apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
// 			authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
// 			projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
// 			storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
// 			messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
// 			appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// 		})

// 	const note = await recall(id)

// 	if (!note)
// 		return { notFound: true }
// 	return {
// 		props: {
// 			content: note.content
// 		}
// 	}
// }

// export async function getStaticPaths() {
// 	if (!getApps().length)
// 		initializeApp({
// 			apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
// 			authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
// 			projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
// 			storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
// 			messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
// 			appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// 		})

// 	const notes = await recall()

// 	return {
// 		paths: notes.map(({ id }) => ({ params: { id }})),
// 		fallback: 'blocking'
// 	}
// }
