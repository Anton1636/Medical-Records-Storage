const { ethers } = require('hardhat')
const config = require('../src/config.json')

async function main() {
	const { chainId } = await ethers.provider.getNetwork()
	console.log(`Using ChainId ${chainId}`)

	const accounts = await ethers.getSigners()
	const medical = await ethers.getContractAt(
		'MedicalRecords',
		config[chainId].MedicalRecords.address
	)

	console.log(
		`MedicalRecords smart contract is fetched at address ${medical.address}`
	)

	let transactionResponse
	const user1 = accounts[0]
	transactionResponse = await medical
		.connect(user1)
		.addRecord(
			'John Smith',
			45,
			'Male',
			'O+',
			'Penicillin',
			'Type 2 Diabetes',
			'Insulin, Diet Management'
		)
	await transactionResponse.wait()
	console.log(`Record added with id ${await medical.getRecordId()}`)
	transactionResponse = await medical
		.connect(user1)
		.addRecord(
			'Emily White',
			27,
			'Female',
			'A-',
			'Dust',
			'Seasonal Allergies',
			'Antihistamines, Avoidance'
		)
	await transactionResponse.wait()
	console.log(`Record added with id ${await medical.getRecordId()}`)
	transactionResponse = await medical
		.connect(user1)
		.addRecord(
			'Michael Brown',
			62,
			'Male',
			'B+',
			'Shellfish',
			'Osteoarthritis',
			'Pain Management, Physical Therapy'
		)
	await transactionResponse.wait()
	console.log(`Record added with id ${await medical.getRecordId()}`)
	transactionResponse = await medical
		.connect(user1)
		.addRecord(
			'Lisa Davis',
			33,
			'Female',
			'O-',
			'Peanuts',
			'Asthma',
			'Inhalers, Avoidance'
		)
	await transactionResponse.wait()
	console.log(`Record added with id ${await medical.getRecordId()}`)
	transactionResponse = await medical
		.connect(user1)
		.addRecord(
			'Robert Clark',
			50,
			'Male',
			'AB-',
			'None',
			'High Cholesterol',
			'Statins, Dietary Changes'
		)
	await transactionResponse.wait()
	console.log(`Record added with id ${await medical.getRecordId()}`)
	transactionResponse = await medical
		.connect(user1)
		.addRecord(
			'Samantha Lee',
			18,
			'Female',
			'A+',
			'Pollen',
			'Migraine',
			'Painkillers, Rest'
		)
	await transactionResponse.wait()
	console.log(`Record added with id ${await medical.getRecordId()}`)
	transactionResponse = await medical
		.connect(user1)
		.addRecord(
			'Daniel Wilson',
			55,
			'Male',
			'A+',
			'Cats',
			'GERD',
			'Antacids, Dietary Changes'
		)
	await transactionResponse.wait()
	console.log(`Record added with id ${await medical.getRecordId()}`)
	transactionResponse = await medical
		.connect(user1)
		.addRecord(
			'Olivia Taylor',
			41,
			'Female',
			'B-',
			'None',
			'Fibromyalgia',
			'Pain Management, Exercise'
		)
	await transactionResponse.wait()
	console.log(`Record added with id ${await medical.getRecordId()}`)
	transactionResponse = await medical
		.connect(user1)
		.addRecord(
			'Ethan Martinez',
			30,
			'Male',
			'O+',
			'None',
			'Anxiety Disorder',
			'Therapy, Medication'
		)
	await transactionResponse.wait()
	console.log(`Record added with id ${await medical.getRecordId()}`)
	transactionResponse = await medical.connect(user1).deleteRecord(1)
	await transactionResponse.wait()
	console.log(`Record deleted`)
	transactionResponse = await medical.connect(user1).deleteRecord(5)
	await transactionResponse.wait()
	console.log(`Record deleted`)
}

main()
	.then(() => process.exit(0))
	.catch(error => {
		console.log(error)
		process.exit(1)
	})
