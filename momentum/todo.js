const todoform= document.getElementById("todo-form");
const todoInput=document.querySelector("#todo-form input");
const todolist= document.getElementById("todo-list");

let todos=[];

function savetodos(){
    localStorage.setItem("todos",JSON.stringify(todos));
}

function painttodo(newtodo){
    const li = document.createElement("li");
    li.id=newtodo.id;
    
    const button= document.createElement("button");
    button.innerText= "X";
    const span = document.createElement("span");
    span.innerText = " "+newtodo.text;
    
    button.addEventListener("click",deletetodo)
    li.appendChild(button); 
    li.appendChild(span);
    
    todolist.appendChild(li);
}
//for recap form has a default:submit->redirection and you need to prevent redirection
function handletodosubmit(event) {
    event.preventDefault();
    const newtodo=todoInput.value;
    todoInput.value="";
    const newtodoobj = {
        text:newtodo,
        id:Date.now(),
    };
    todos.push(newtodoobj);
    painttodo(newtodoobj);
    savetodos();
}

function deletetodo(event){
    const li=event.target.parentElement;
    li.remove();
    todos=todos.filter(todo=> todo.id!== parseInt(li.id) );
    savetodos();
    
}

todoform.addEventListener("submit",handletodosubmit);

const savedtodos=localStorage.getItem("todos");

if(savedtodos!==null){
    const parsedtodos=JSON.parse(savedtodos);
    todos=parsedtodos;
    parsedtodos.forEach(painttodo);
}

