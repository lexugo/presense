import { useClasses } from 'neon'

export default function Keypress({ disabled, className, children: key }) {
	const classNames = useClasses(className, disabled && 'disabled', 'keypress')
	return <span className={classNames}>press&nbsp;<span className='key'>{ key }</span></span>
}
