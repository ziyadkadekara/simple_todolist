const todoArray = [];

function renderTodo (){
    let todoList = '';
    
    for(let i=0; i<todoArray.length;i++){
        let html = `<p>${todoArray[i]}</p>`;
        todoList +=html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoList;
}


function addTodo () {
    const inputElement = document.querySelector('.js-todo-name');
    const todoName = inputElement.value;
    console.log(todoName); 
    todoArray.push(todoName);
    console.log(todoArray);
    inputElement.value='';
    renderTodo();
}

function handleTodoKeydown(event) {
    if (event.key === 'Enter') {
      addTodo();
    }
  }