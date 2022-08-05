import { state, getContacts } from "./getContacts.js"
console.log(state)

const btnDel = () => {
	let delBtn = document.querySelectorAll('.del')
	delBtn.forEach((el, index) => {
		el.addEventListener('click', () => {
			delContact(state.contacts[index].id)
		})
	})
}

const delContact = (id) => {
	let url = `http://127.0.0.1:8000/api/v1/account/${id}/`
	console.log(url)
	fetch(url, {
		method: "DELETE"
	})
}
export { btnDel }