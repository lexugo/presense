import useAuth from 'hooks/useAuth'
import { useCollection, useWhere as where, useOrderBy as orderBy, useLimit as limit } from 'braise'

export default function Notes() {
	const { id } = useAuth()
	const notes = useCollection('notes',
		where('recorded.by', '==', id),
		orderBy('recorded.on', 'desc'),
		// limit(4)
	)

	return (
		<div className='notes'>
			{ notes?.map(({ id, ...note }) => <Note key={id} {...note} />) }
		</div>
	)
}

function Note({ content, context, feelings }) {
	return (
		<div className='note'>
			<h3><q>{ content }</q><span className='author'>Hugo</span></h3>
			{ context && <p className='context'>{ context }</p> }
			{ feelings && <p className='feelings'>{ feelings }</p> }
			<br />
		</div>
	)
}
