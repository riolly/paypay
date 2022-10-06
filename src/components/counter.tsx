import {createSignal} from 'solid-js'

export default function Counter() {
	const [count, setCount] = createSignal(0)

	return (
		<div class='mb-4 flex gap-2'>
			<button onClick={() => setCount(count() - 1)}>-</button>
			<p>{count()}</p>
			<button onClick={() => setCount(count() + 1)}>+</button>
		</div>
	)
}
