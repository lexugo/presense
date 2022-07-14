import { useClasses } from 'neon'


export default function Question({ name, answer, onChange, onSubmit, required, placeholder, children: label }) {
	function submit(event) {
		event.preventDefault()
		onSubmit(answer ?? placeholder)
	}

	const classNames = useClasses(required && 'required', 'question')
	return (
		<div className={classNames}>
			<label htmlFor={name}>{ label }</label>
			<input type='text'
				name={name}
				value={answer ?? ''}
				onChange={({ target: { value }}) => onChange(value)}
				onSubmit={submit}
				autoComplete='off'
				placeholder={placeholder}
				required={required}
			/>
			<Submit onSubmit={submit} disabled={required && !answer} />
		</div>
	)
}

function Submit({ onSubmit, disabled }) {
	const classNames = useClasses(disabled && 'disabled', 'keypress')
	return (
		<div className='submit'>
			<button type='submit' onClick={onSubmit} disabled={disabled}>Ok</button>
			<span className={classNames}>press&nbsp;<span className='key'>Enter&nbsp;↵</span></span>
		</div>
	)
}
