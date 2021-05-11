import React, { useState } from 'react';

function Counter() {
	const [counter, setCounter] = useState(0);
	const [setvalue, setValue] = useState(0);

	return (
		<div>
			<div>Counter: 12</div>
			<div>
				<button
					onClick={() => {
						setCounter(counter + 1);
					}}
				>
					Increment
				</button>
				<br />
				<button
					onClick={() => {
						setCounter(counter - 1);
					}}
				>
					Decrement
				</button>
			</div>
			<div>
				<input
					type="text"
					onChange={(e) => {
						setValue(e.target.value);
					}}
				/>

				<br />
				<button
					onClick={() => {
						setCounter(counter + value);
					}}
				>
					Increment by Value
				</button>
			</div>
		</div>
	);
}

export default Counter;
