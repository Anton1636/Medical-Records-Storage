import React, { useState } from 'react'
import './Form.css'
import { useDispatch, useSelector } from 'react-redux'
import { submitRecord } from '../store/interactions'

const Form = () => {
	const account = useSelector(state => state.provider.account)
	const provider = useSelector(state => state.provider.connection)
	const medical = useSelector(state => state.medical.contract)
	const dispatch = useDispatch()

	const [name, setName] = useState(0)
	const [age, setAge] = useState(0)
	const [gender, setGender] = useState(0)
	const [bloodType, setBloodType] = useState(0)
	const [allergies, setAllergies] = useState(0)
	const [diagnosis, setDiagnosis] = useState(0)
	const [treatment, setTreatment] = useState(0)

	const submitHandler = async e => {
		e.preventDefault()
		await submitRecord(
			name,
			age,
			gender,
			bloodType,
			allergies,
			diagnosis,
			treatment,
			provider,
			medical,
			dispatch
		)
		setName(0)
		setAge(0)
		setGender(0)
		setBloodType(0)
		setAllergies(0)
		setDiagnosis(0)
		setTreatment(0)
	}
	return (
		<div className='login-container'>
			{account ? (
				<form onSubmit={submitHandler}>
					<h1>Patient Details</h1>
					<label html='name'>Patient Name:</label>
					<input
						type='text'
						id='name'
						name='name'
						required
						onChange={e => setName(e.target.value)}
						value={name === 0 ? '' : name}
						placeholder='Name Surname'
					/>
					<label htmlFor='age'>Age:</label>
					<input
						type='number'
						id='age'
						name='age'
						required
						onChange={e => setAge(e.target.value)}
						value={age === 0 ? '' : age}
						placeholder='Your Age'
					/>
					<label htmlFor='gender'>Gender:</label>
					<select
						name='gender'
						id='gender'
						required
						onChange={e => setGender(e.target.value)}
						value={gender === 0 ? '' : gender}
					>
						<option value='' disabled>
							Select Gender
						</option>
						<option value='Male'>Male</option>
						<option value='Female'>Female</option>
						<option value='Other'>Other</option>
					</select>
					<label htmlFor='bloodType'>Blood type:</label>
					<input
						type='text'
						id='name'
						name='name'
						required
						onChange={e => setBloodType(e.target.value)}
						value={bloodType === 0 ? '' : bloodType}
						placeholder='Your Blood Type'
					/>
					<label htmlFor='allergies'>Allergies:</label>
					<input
						type='text'
						id='name'
						name='name'
						required
						onChange={e => setAllergies(e.target.value)}
						value={allergies === 0 ? '' : allergies}
						placeholder='Your Allergies'
					/>
					<label htmlFor='diagnosis'>Diagnosis:</label>
					<input
						type='text'
						id='name'
						name='name'
						required
						onChange={e => setDiagnosis(e.target.value)}
						value={diagnosis === 0 ? '' : diagnosis}
						placeholder='Your Diagnosis'
					/>
					<label htmlFor='treatment'>Treatment:</label>
					<input
						type='text'
						id='name'
						name='name'
						required
						onChange={e => setTreatment(e.target.value)}
						value={treatment === 0 ? '' : treatment}
						placeholder='Your Treatment'
					/>
					<input type='submit' value='submit' />
				</form>
			) : (
				<h1>Connect the account first</h1>
			)}
		</div>
	)
}

export default Form
