import './App.css'
import { useEffect } from 'react'
import {
	loadAccount,
	loadAllData,
	loadMedical,
	loadNetwork,
	loadProvider,
	subscribeToEvent,
} from './store/interactions'
import { useDispatch } from 'react-redux'
import { Alert, Data, Form, Navbar, Option } from './components'
import config from './config.json'
import { Route, Routes } from 'react-router-dom'

function App() {
	const dispatch = useDispatch()
	const loadBlockchainData = async () => {
		const provider = loadProvider(dispatch)
		const chainId = await loadNetwork(provider, dispatch)
		console.log('Chain ID:', chainId)
		console.log('Config:', config)
		const medical_config = config[chainId].MedicalRecords
		window.ethereum.on('accountsChanged', () => {
			loadAccount(provider, dispatch)
		})
		window.ethereum.on('chainChanged', () => {
			window.location.reload()
		})
		const medical = await loadMedical(
			provider,
			medical_config.address,
			dispatch
		)
		loadAllData(provider, medical, dispatch)
		subscribeToEvent(medical, dispatch)
	}

	useEffect(() => {
		loadBlockchainData()
	})
	return (
		<div className='App'>
			<div className='navbar'>
				<Navbar />
				<Option />
				<Routes>
					<Route path='/' exact element={<Form />} />
					<Route path='/Data' exact element={<Data />} />
				</Routes>
				<Alert />
			</div>
		</div>
	)
}

export default App
