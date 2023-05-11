const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];
//const todoListArray=[];
renderTodoList();


function addTodo() {
  const name = document.querySelector('.js-name-input').value;
  const dueDate = document.querySelector('.js-date-input').value;
  todoList.push({name,dueDate});
  //saveToStorage();
  
  document.querySelector('.js-name-input').value = '';
  document.querySelector('.js-date-input').value = '';
  renderTodoList();
  saveToStorage();
  
} 
function renderTodoList() {
  
  let todoListHTML = '';
  for(let i=0; i<todoList.length; i++){
    const todoObject = todoList[i];
    const{name,dueDate}=todoObject; 
    const html = `
                  <div>${name}</div>
                  <div>${dueDate}</div>
                  <button class='delete-button' onclick="
                    todoListArray.splice(${i},1);
                    renderTodoList();
                  " >Delete</button>
                `;
    todoListHTML += html; 
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  
}
function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}