import { useCollection } from 'braise'
import { limit, orderBy, where } from 'firebase/firestore'

export default function Notes() {
	const notes = useCollection('notes', [
		where('recorded.by', '==', 'hugo'), // TODO: use authentication
		orderBy('recorded.on', 'desc'),
		limit(2) // TODO: infinite scrolling
	])

	return (
		<div className='notes'>
			{ notes?.map(({ id, ...note }) => <Note key={id} {...note} />) }
		</div>
	)
}

function Note({ content, context, feelings }) {
	return (
		<div className='note'>
			<h3><q>{ content }</q></h3>
			{ context && <p className='context'>{ context }</p> }
			{ feelings && <p className='feelings'>{ feelings }</p> }
			<br />
		</div>
	)
}
