import React from 'react'
import './Option.css'
import { Link } from 'react-router-dom'

const Option = () => {
	return (
		<div>
			<Link to='/' className='opt__form'>
				Form
			</Link>
			<Link to='/Data' className='opt__data'>
				Data
			</Link>
		</div>
	)
}

export default Option
