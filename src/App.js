import { useState } from 'react';
import classes from './App.module.css';

function App() {
	const [color, setColor] = useState('');

	const [error, setError] = useState(false);

	const changeHandler = (e) => {
		setColor(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		alert('submit button clicked');
	};

	return (
		<>
			<section className={classes.container}>
				<h3>Color Generator</h3>

				<form onSubmit={submitHandler}>
					<input
						type='text'
						placeholder='type color'
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
			<p>{color}</p>
		</>
	);
}

export default App;
