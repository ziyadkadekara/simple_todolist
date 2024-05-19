const todoArray = [{todo:'',dueDate:''}];  //object declaration

function renderTodo() {
    let todoList = '';

    for (let i = 0; i < todoArray.length; i++) {
        const html = `<p>${todoArray[i].todo} ${todoArray[i].dueDate} 
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
    console.log(todo);
    todoArray.push({todo,dueDate});
    inputElement.value = '';
    renderTodo();
}

function handleTodoKeydown(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}