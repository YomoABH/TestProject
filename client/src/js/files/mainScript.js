import { getContacts } from "./getContacts.js"
import { addContact } from "./addContact.js"
import { btnDel } from "./del.js"

document.addEventListener("DOMContentLoaded", async () => {
	await getContacts()
	btnDel()
})

document.querySelector('.addContact__btn').addEventListener("click", async (el) => {
	el.preventDefault()
	await addContact()
	await getContacts()
	btnDel()
})
