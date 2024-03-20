import './App.css'
import { useEffect } from 'react'
import {
	loadMedical,
	loadNetwork,
	loadProvider,
	subscribeToEvent,
} from './store/interactions'
import { useDispatch } from 'react-redux'
import { Form, Navbar } from './components'
import config from './config.json'

function App() {
	const dispatch = useDispatch()
	const loadBlockchainData = async () => {
		const provider = loadProvider(dispatch)
		const chainId = await loadNetwork(provider, dispatch)
		const medical_config = config[chainId].MedicalRecords
		const medical = await loadMedical(
			provider,
			medical_config.address,
			dispatch
		)
		subscribeToEvent(medical, dispatch)
	}

	useEffect(() => {
		loadBlockchainData()
	})
	return (
		<div className='App'>
			<Navbar />
			<Form />
		</div>
	)
}

export default App
