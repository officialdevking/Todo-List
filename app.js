'use strict'
const clear = document.querySelector('.clear')
const list = document.querySelector('.todo_wrap')
const input = document.querySelector('.add_todo')
const unCheck = 'bi-circle'
const check = 'bi-check-circle-fill'
const line_through = 'lineThrough'

const addToDo = (toDo, id, done) => {
	const DONE = done ? check : unCheck
	const LINE = done ? line_through : ''

	const text = `
  <div id="${id}" class="added_todos">
    <i class="bi ${DONE}  complete check-todo"></i>
    <label for="add_todo" class="added ${LINE} ">${toDo}</label>
  </div>
  `

	const position = 'afterend'

	list.insertAdjacentHTML(position, text)
}

let todosList = []

let id = 0

todosList = [
	// {
	//   name : "Drink a Coffee",
	//   id : 0,
	//   done : false,
	//   trash : false
	// }
]

todosList = JSON.parse(localStorage.getItem('todos'))
	? JSON.parse(localStorage.getItem('todos'))
	: todosList
todosList.forEach((element) => {
	addToDo(element.name, element.id, false, false)
})

input.addEventListener('keyup', (e) => {
	const toDo = input.value
	if (e.keyCode === 13) {
		// For more euality check use three === equal signs
		id = uuidv4()
		console.log(id)
		const toDo = input.value
		if (toDo) {
			addToDo(toDo, id, false, false)
			todosList.push({
				name: toDo,
				id: id,
				done: false,
				trash: false
			})
		}
		input.value = ''
		id
		localStorage.setItem('todos', JSON.stringify(todosList))
	}
})

// Always use carmelCaseing

document.addEventListener('click', (e) => {
	if (e.target.className.includes('check-todo')) {
    // Get todo id
    const todoId = e.target.parentElement.id
    // Get todo index from array
    const index = todosList.findIndex(todo => todo.id === todoId)
    // Get todo item form array
    const result = todosList.find(todo => todo.id === todoId)
    // Update todo
    result.done = true
    // Update the array with result
    todosList[index] = result
    // Save to localStroage
    localStorage.setItem('todos', JSON.stringify(todosList))



		// If You want to delete the Todo form the DOM and localStroage
    
		// const todoId = e.target.parentElement.id
		// const result = todosList.filter((todo => todo.id !== todoId))
    // localStorage.setItem('todos', JSON.stringify(result))
		// e.target.parentElement.remove()
	}
})
