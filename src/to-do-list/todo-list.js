let todoListA = JSON.parse(localStorage.getItem('todoListA')) || [];
renderTodoList();


function addTodo() {
  /*const inputNameElement = document.querySelector('.js-name-input');
  const inputDateElement = document.querySelector('.js-date-input');
  todoListArray.push({name:inputNameElement.value, dueDate:inputDateElement.value});
  renderTodoList();
  inputNameElement.value='';
  inputDateElement.value='';*/

  const name = document.querySelector('.js-name-input').value;
  const dueDate = document.querySelector('.js-date-input').value;
  todoListA.push({name,dueDate});
  renderTodoList();
  saveToStorage();
  
  document.querySelector('.js-name-input').value = '';
  document.querySelector('.js-date-input').value = '';
  
} 
function renderTodoList() {
  
  let todoListHTML = '';
  for(let i=0; i<todoListA.length; i++){
    const todoObject = todoListA[i];
    /*//const name = todoObject.name;
    const{name} = todoObject; //destructuring
    //const dueDate = todoObject.dueDate;
    const {dueDate} = todoObject;*/
    const{name,dueDate}=todoObject; //destructured and simplified
    const html = `
                  <div>${name}</div>
                  <div>${dueDate}</div>
                  <button class='delete-button' onclick="
                    todoListA.splice(${i},1);
                    renderTodoList();
                    saveToStorage();
                  " >Delete</button>
                `;
    todoListHTML += html; 
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  
}
function saveToStorage() {
  localStorage.setItem('todoListA',JSON.stringify(todoListA));
}