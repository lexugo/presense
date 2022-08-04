import useNote from 'hooks/useNote'

export default function Note({ id }) {
	const note = useNote(id)

	if (!note) // TODO: Suspense
		return <p className='suspended note' /> // TODO: Show skeleton
	return (
		<p className='note'>
			<q>{ note.content }</q>
			<span className='author'>Hugo</span>
		</p>
	)
}
