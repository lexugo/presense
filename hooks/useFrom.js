import { useMemo, useState } from 'react'

export default function useFrom(collection) {
	const [index, setIndex] = useState(0)
	const values = useMemo(() => normalize(collection), [collection])
	const value = useMemo(() => values[index], [index, values])

	const first = index <= 0
	const last = index >= values.length - 1
	const previous = useMemo(() => first ? undefined : () => setIndex(index => index - 1), [first])
	const next = useMemo(() => last ? undefined : () => setIndex(index => index + 1), [last])

	return {
		value, previous, next,
		index,
	}
}

function normalize(collection) {
	return Array.isArray(collection) ? collection : Object.values(collection)
}
