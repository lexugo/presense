import { useState } from 'react'
import { unindexed, useInterval } from 'neon'

function Loading() {
	const [waiting, setWaiting] = useState(1)
	useInterval(() => setWaiting(waiting => waiting + 1), 1000)

	return <div className="loading"><h1>Loading<span className='bars'> { romanize(waiting) }</span></h1></div>
}

function romanize(num) {
	if (num >= 1000) return 'M'.repeat(num / 1000) + romanize(num % 1000)
	if (num >= 900) return 'CM' + romanize(num - 900)
	if (num >= 500) return 'D' + romanize(num - 500)
	if (num >= 400) return 'CD' + romanize(num - 400)
	if (num >= 100) return 'C' + romanize(num - 100)
	if (num >= 90) return 'XC' + romanize(num - 90)
	if (num >= 50) return 'L' + romanize(num - 50)
	if (num >= 40) return 'XL' + romanize(num - 40)
	if (num >= 10) return 'X' + romanize(num - 10)
	if (num >= 9) return 'IX' + romanize(num - 9)
	if (num >= 5) return 'V' + romanize(num - 5)
	if (num >= 4) return 'IV' + romanize(num - 4)
	if (num >= 1) return 'I'.repeat(num)
	return ''
}

export default unindexed(Loading)
