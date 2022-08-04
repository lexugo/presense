import { recall } from 'services/notes'

import Choice, { Between } from 'components/select'
import Option from "components/option"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Note() {
	const { id } = useRouter().query
	const [note, setNote] = useState()

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
