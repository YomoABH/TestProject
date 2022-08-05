const list = document.querySelector('.list')

const state = {
	contacts: [],
}


//* вызов API 
const getContacts = async () => {
	await fetch("http://127.0.0.1:8000/api/v1/account/")
		.then(res => res.json())
		.then(contacts => {
			state.contacts = state.contacts.concat(contacts)
			pushContact(state.contacts)

		})
}

//* Создание шаблона контакта
const createContact = (contact) => {
	return (
		`
			<li class="item">
				<div class="flex-wrapper">
					<div class="">${contact.name}</div>
					<div class="">${contact.number}</div>
					<div class="">${contact.age}</div>
				</div>
				<div class="btn-panel">
				<button class="put">put</button>
				<button class="del">del</button>
				</div>
			</li>
			`
	)
}


//* Добавление сонтакта в лист
const pushContact = (contacts) => {
	list.innerHTML = ""
	if (contacts.length) {
		contacts.forEach(contact => {
			list.innerHTML += createContact(contact)
		})
	}
}


export { getContacts, state }