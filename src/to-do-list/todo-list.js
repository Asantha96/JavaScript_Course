const todoListArray = [{name:'make dinner',dueDate:'2023-05-07'}, {name:'wash dishes', dueDate:'2023-07-08'}];
renderTodoList();
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  todoListArray.push(inputElement.value);
  //console.log(todoListArray);
  renderTodoList();
  inputElement.value='';
  
} 
function renderTodoList() {
  
  let todoListHTML = '';
  for(let i=0; i<todoListArray.length; i++){
    const todoObject = todoListArray[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `<p>
                    ${todo} ${dueDate}
                    <button onclick="
                      todoListArray.splice(${i},1);
                      renderTodoList();
                    " >Delete</button>
                  </p>`;
    todoListHTML += html; 
  }
  //console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  
}