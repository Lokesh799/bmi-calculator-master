import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setBmiState } from '../../action';




const BmiForm = ({ change }) => {

	const state = useSelector((state) => state.bmiState.data)
	const { weight, height } = state
	const dispatch = useDispatch();

	const handleChange = e => {
		let { value, name } = e.target;
		console.log(value)
		if (value > 999) {
			value = 999;
		}

		const setMeassure = { ...state, [name]: value };
		dispatch(setBmiState(setMeassure))
	
	};

	const handleSubmit = () => {
		change(state);
	};

	return (
		<>
			<div className="row">
				<div className="col m6 s12">
					<label htmlFor="weight">Weight (in kg)</label>
					<input
						id="weight"
						name="weight"
						type="number"
						min="1"
						max="999"
						placeholder="50"
						value={weight}
						onChange={handleChange}
					/>
				</div>

				<div className="col m6 s12">
					<label htmlFor="height">Height (in cm)</label>
					<input
						id="height"
						name="height"
						type="number"
						min="1"
						max="999"
						placeholder="176"
						value={height}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="center">
				<button
					id="bmi-btn"
					className="calculate-btn"
					type="button"
					disabled={weight === '' || height === ''}
					onClick={handleSubmit}
				>
					Calculate BMI
				</button>
			</div>
		</>
	);
};

BmiForm.propTypes = {
	change: PropTypes.func.isRequired
};

export default BmiForm;