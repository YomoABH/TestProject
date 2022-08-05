
const inputName = document.querySelector('.addContact__name')
const inputNumber = document.querySelector('.addContact__number')
const inputAge = document.querySelector('.addContact__age')


const addContact = async () => {
	const data = {
		name: inputName.value,
		number: inputNumber.value,
		age: inputAge.value
	}

	await fetch('http://127.0.0.1:8000/api/v1/account/', {
		headers: {
			"Content-Type": "application/json; UTF-8"
		},
		body: JSON.stringify(data),
		method: 'POST',
	})
	clearInput()
}

const clearInput = () => {
	inputName.value = ""
	inputNumber.value = ""
	inputAge.value = ""
}

export { addContact, inputName, inputNumber, inputAge }