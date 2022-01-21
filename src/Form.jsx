import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const initialValues = {
	weight: '',
	height: '',
	date: ''
}

const Form = ({ change }) => {
	const [state, setState] = useState(initialValues);

	const handleChange = e => {
		let { value, name } = e.target;
		if (value > 999) {
			value = 999;
		}
		const date = new Date().toLocaleString().split(',')[0];
		setState({
			...state,
			[name]: value,
			date
		});
	};

	const handleSubmit = () => {
		change(state);
		setState(initialValues);
	};

	return (
		<>
			<div className="row">
				<div className="col m6 s12">
					<label htmlFor="weight">X Coordinate</label>
					<input
						id="weight"
						name="weight"
						type="number"
						min="-150"
						max="150"
						placeholder="0"
						value={state.weight}
						onChange={handleChange}
					/>
				</div>

				<div className="col m6 s12">
					<label htmlFor="height">Y Coordinate</label>
					<input
						id="height"
						name="height"
						type="number"
						min="-150"
						max="150"
						placeholder="0"
						value={state.height}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="center">
				<button
					id="bmi-btn"
					className="calculate-btn"
					type="button"
					disabled={state.weight === '' || state.height === ''}
					onClick={handleSubmit}
				>
					See What's There
				</button>
			</div>
		</>
	);
};

Form.propTypes = {
	change: PropTypes.func.isRequired
};

export default Form;
