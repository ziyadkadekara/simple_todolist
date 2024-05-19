const todoArray = [];  //object declaration

function renderTodo() {
    let todoList = '';

    for (let i = 0; i < todoArray.length; i++) {
        const html = `<p>${todoArray[i].todo} ${dueStatus(i)} 
        <button onclick="
        todoArray.splice(${i},1);
        renderTodo();
        ">Delete</button></p>`;
        todoList += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoList;
}


function addTodo() {
   
    const inputElement = document.querySelector('.js-todo-name');
    const dueDateElement = document.querySelector('.js-duedate');
    const todo = inputElement.value;
    const dueDate = dueDateElement.value;
    inputElement.value = '';
    dueDateElement.value= '';
    if(!todo){ alert("Add a todo first");} else{
    todoArray.push({todo,dueDate});
    renderTodo();}
    
}

function handleTodoKeydown(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}
//returns no due if the date is empty
function dueStatus (i) {
    const status = todoArray[i].dueDate;
    if(!status){
        return 'no Due';
    }else {
        return status;
    }
}