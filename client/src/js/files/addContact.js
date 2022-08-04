const addBtn = document.querySelector('.addContact__btn')
const inputName = document.querySelector('.addContact__name')
const inputNumber = document.querySelector('.addContact__number')
const inputAge = document.querySelector('.addContact__age')



addBtn.addEventListener('click', (el) => {
	el.preventDefault()
	const data = {
		name: inputName.value,
		number: inputNumber.value,
		age: inputAge.value
	}

	fetch('http://127.0.0.1:8000/api/v1/acсount/', {
		headers: {
			"Content-Type": "application/json; UTF-8"
		},
		body: JSON.stringify(data),
		method: 'POST',
	})

})