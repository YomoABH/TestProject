// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const btn = document.querySelector(".btn")
const list = document.querySelector(".list")

const state = {
	users: [],
}

btn.addEventListener('click', () => {
	getUserForServer();
})


const createElement = (user) => {
	return (
		`
	<li class="item">
		<div class="name">${user.name}</div>
		<div class="phone">${user.number}</div>
		<div class="age">${user.age}</div>
	</li>
	`
	)
}

// ? ФУНКЦИЯ ЗАПОЛНЕНИЯ ПОСТА
function fillPostsList(users) {
	list.innerHTML = " "

	if (users.length) {

		users.forEach(user => list.innerHTML += createElement(user))
	}
}


function getUserForServer() {
	fetch("http://127.0.0.1:8000/api/v1/ac%D1%81ount/?format=json", {
		headers: {
			"content-type": "application/json; charset=UTF-8",
		}
	})
		.then(res => res.json())
		.then((users) => {
			state.users = state.users.concat(users.humans)
			fillPostsList(state.users)
		})
		.catch(error => list.innerHTML = printErrorList())
}

const printErrorList = () => {
	return (
		`
	<li class = "error-item">
		Упс... Произошла ошибка
	</li>
`
	)

}