const todoArray = [];  //object declaration

function renderTodo() {
    let todoList = '';
//used .forEach function
    todoArray.forEach((todoName,index)=>{
        const {todo} = todoName;
        const html = `
        <div>${todo}</div>
         <div> ${dueStatus(index)} </div>
         <button class="delete-button js-delete-button">Delete</button>`;
         todoList += html; 
    });

    document.querySelector('.js-todo-list').innerHTML = todoList; 

    document.querySelectorAll('.js-delete-button').forEach((deleteButton, index)=>{
        deleteButton.addEventListener('click',()=>{
            todoArray.splice(index,1);
        renderTodo();
        });
    });


    /* for (let i = 0; i < todoArray.length; i++) {
         const html = `
        <div>${todoArray[i].todo}</div>
         <div> ${dueStatus(i)} </div>
         <button onclick="
        todoArray.splice(${i},1);
        renderTodo();
        " class="delete-button js-delete-button">Delete</button>`;
         todoList += html;
    }
     document.querySelector('.js-todo-list').innerHTML = todoList; */
}

document.querySelector('.js-todo-add-button').addEventListener('click',()=>{
        addTodo();
});
// listening keypress buttons..........................

document.body.addEventListener('keydown', (event)=> {
    if(event.key=== 'Enter'){
        addTodo();
    } 
  });
  
  //............................................

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

// function handleTodoKeydown(event) {
//     if (event.key === 'Enter') {
//         addTodo();
//     }
// } not required now updated with new code


//returns no due if the date is empty
function dueStatus (i) {
    const status = todoArray[i].dueDate;
    if(!status){
        return 'no due';
    }else {
        return status;
    }
}