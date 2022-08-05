const addBtn = document.querySelector('.addContact__btn')
const inputName = document.querySelector('.addContact__name')
const inputNumber = document.querySelector('.addContact__number')
const inputAge = document.querySelector('.addContact__age')

import { state, getContacts, createContact, pushContact } from "./getContacts.js"

addBtn.addEventListener('click', async (el) => {
	el.preventDefault()
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
	getContacts()
})


const clearInput = () => {
	inputName.value = ""
	inputNumber.value = ""
	inputAge.value = ""

}