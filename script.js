const todoArray = [];

function addTodo () {
    const inputElement = document.querySelector('.js-todo-name');
    const todoName = inputElement.value;
    console.log(todoName); 
    todoArray.push(todoName);
    console.log(todoArray);
}