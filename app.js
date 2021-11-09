'use strict'
const clear = document.querySelector('.clear');
const list = document.querySelector('.todo_wrap');
const input = document.querySelector('.add_todo');
const unCheck = "bi-circle"
const check = "bi-check-circle-fill"
const line_through = "lineThrough";

function addToDo(toDo, id, done){

  const DONE = done ? check : unCheck;
  const LINE = done ? line_through : "";


  // console.log(done);
  const text = `<div class="added_todos">
    <i class="bi ${DONE}  complete id = ${id} "></i>
    <label for="add_todo" class="added ${LINE} ">${toDo}</label>
  </div>`

  const position = 'afterend';
  
  list.insertAdjacentHTML(position, text);

}



// function completeTodo(params) {
//   console.log(params);
// }

// addToDo('Drink Cofee', 1, true);
let LIST = [];

let id = 0;


// completeTodo()

LIST = [
  // {
  //   name : "Drink a Coffee",
  //   id : 0,
  //   done : false,
  //   trash : false
  // }
  // {
  //   name : "workout",
  //   done : true,
  //   trash : false
  // }
]

LIST = JSON.parse(localStorage.getItem("name")) ? JSON.parse(localStorage.getItem("name")) : LIST
LIST.forEach(element => {
  addToDo(element.name, element.id, false, false)
  // console.log(element.name)
});
// addToDo(list)
// localStorage.clear() 

document.addEventListener('keyup', (e)=>{
  if(e.keyCode == 13){
    const toDo = input.value;
    if (toDo) {
      addToDo(toDo, id, false, false)
      LIST.push(
        {
          name : toDo,
          id : id,
          done : false,
          trash : false
        }
      )
    }
    input.value = ""
    id++
    localStorage.setItem("name", JSON.stringify(LIST));
  }
})
console.log(LIST);

// function completeTodo(element){
//   element.classList.toggle(check);
//   element.classList.toggle(unCheck);
//   element.parentNode.querySelector(".text").classList.toggle(line_through)
//   LIST[element.id].done = LIST[element.id].done ? false : true;
// }



































// let inputted = document.querySelector(".add_todo").value;
// let addedtodo = document.querySelector(".added_todos");
// let todosWrapper = document.querySelector(".todo_wrap");

// let items = [];

// items = JSON.parse(localStorage.getItem("name")) ? JSON.parse(localStorage.getItem("name")) : [] 
// todosWrapper.innerHTML = items?.map(item => `<div class="added_todos">
// <input type="checkbox" class="add_todo_check"  />
// <label for="add_todo" class="added">${item}</label>
// </div>
// `).join('')


// document.addEventListener("keyup", (event)=> {
//   if (event.keyCode === 13) {
//     let inputted = document.querySelector(".add_todo").value;
//     items.push(inputted);
//     if (items.length  <= 8) {
//       todosWrapper.innerHTML = items.map(item => `<div class="added_todos" >
//       <input type="checkbox" class="add_todo_check" />
//       <label for="add_todo" class="added">${item}</label>
//       </div>
//       `).join('') ;
//     }
//     // dynamic.innerHTML = `${items.length - 8} items left`

//     localStorage.setItem("name", JSON.stringify(items));
    
//   }
// });



// todosWrapper.addEventListener('click', (ev)=>{
//   if (todosWrapper.c) {
    
//   }
// })


// // let allTodos = document.querySelector('.all');
 
// // allTodos.addEventListener('click', (e)=>{
// //   // allTodos.innerHTML = 'less'
// //   if (e.target.value = 'all') {
// //     todosWrapper.innerHTML = items.map(item => `<div class="added_todos" >
// //     <input type="checkbox" class="add_todo_check" />
// //     <label for="add_todo" class="added">${item}</label>
// //     </div>
// //     `).join('') ;
// //   }
// // })

// // if (allTodos) {
  
// // }





// // let added = document.querySelector(".added");
// // let dynamic = document.querySelector('.left')
// // let options = document.querySelector('.options');




// // let striking = document.querySelectorAll('.add_todo_check');

// // const strike = ()=> {
// //   alert('DFCGVBHJNMK')
//   // Array.from(striking).forEach(strike =>{
//   //   strike.addEventListener('change', (e)=>{

      
//   //       alert('hghghgh')
      
//   //   })
//   // })
// // }
// // console.log(striking);