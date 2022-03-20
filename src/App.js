import { useState } from 'react';
import classes from './App.module.css';

import Values from 'values.js';
import SingleColor from './SingleColor';

function App() {
	const [color, setColor] = useState('');

	const [error, setError] = useState(false);

	const [list, setList] = useState(new Values('#0000ff').all(10));

	// console.log(list);
	const changeHandler = (e) => {
		setColor(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		try {
			let colors = new Values(color).all(10);
			setList(colors);
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};

	return (
		<>
			<section className={classes.container}>
				<h3>Color Generator</h3>

				<form onSubmit={submitHandler}>
					<input
						type='text'
						placeholder='#0000ff'
						value={color}
						onChange={changeHandler}
						className={`${
							error ? classes.input_error : classes.input
						}`}></input>
					<button type='submit' className={classes.btn}>
						Get Colors
					</button>
				</form>
			</section>

			<section className={classes.colors}>
				{list.map((color, index) => {
					return (
						<SingleColor
							key={index}
							{...color}
							index={index}
							hexColor={color.hex}
						/>
					);
				})}
			</section>
		</>
	);
}

export default App;
