import { recall } from 'services/notes'
import { initializeApp, getApps } from 'firebase/app'

export default function Note({ id, content }) {
	return (
		<div>
			<h1>Thank you.</h1>
			<p>{ content }</p>
		</div>
	)
}

export async function getStaticProps({ params: { id }}) {
	if (!getApps().length)
		initializeApp({
			apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
			authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
			projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
			storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
			messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
			appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
		})

	const note = await recall(id)

	if (!note)
		return { notFound: true }
	return {
		props: {
			id,
			content: note.content
		}
	}
}

export async function getStaticPaths() {
	if (!getApps().length)
		initializeApp({
			apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
			authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
			projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
			storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
			messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
			appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
		})

	const notes = await recall()

	return {
		paths: notes.map(({ id }) => ({ params: { id }})),
		fallback: 'blocking'
	}
}
