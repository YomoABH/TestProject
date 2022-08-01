// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const btn = document.querySelector(".btn")
const list = document.querySelector(".list")

const state = {
	users: [],
}

btn.addEventListener('click', async () => {
	await getUserForServer();
})


function createElement(users) {
	`
	<li class="item">
		<div class="name">${users.name}</div>
		<div class="phone">${users.number}</div>
		<div class="age">${users.age}</div>
	</li>
	`
}

// ? ФУНКЦИЯ ЗАПОЛНЕНИЯ ПОСТА
function fillPostsList(users) {
	root.innerHTML = ""

	if (users.length) {
		users.forEach(user => root.innerHTML += createElement(user))
	}
	console.log('отрисовка контента');
}


function getUserForServer() {
	fetch("http://127.0.0.1:8000/api/v1/acount/", {
		headers: {
			"content-type": "application/json; charset=UTF-8"
		}
	})
		.them(res => res.json())
		.then((users) => {
			state.users = state.users.concat(users)
			fillPostsList(state.users)
		})
}