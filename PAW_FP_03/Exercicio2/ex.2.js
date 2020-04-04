function markAllAsDone() {
    const todoList = JSON.parse(localStorage.getItem('todos')) || [];
    const doneList = todoList.map((todo) => {
        return {
            ...todo,
            done: true
        }
    })
    localStorage.setItem('todos', JSON.stringify(doneList));
    renderList();
}

function updateTodo(index, done) {
    const todoList = JSON.parse(localStorage.getItem('todos')) || [];
    todoList.splice(index, 1, {
        title: todoList[index].title,
        done
    });
    localStorage.setItem('todos', JSON.stringify(todoList));
}

function deleteTodo(index) {
    const todoList = JSON.parse(localStorage.getItem('todos')) || [];
    todoList.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todoList));
}

function addTodo(todo) {
    const todoList = JSON.parse(localStorage.getItem('todos')) || [];
    todoList.push(todo);
    localStorage.setItem('todos', JSON.stringify(todoList));
}

function renderList() {
    const listElement = document.querySelector('.list');
    const todoList = JSON.parse(localStorage.getItem('todos')) || [];
    const todoListDOM = todoList.map((todo, index) => {
        return `
			<li>
				<label>
					<input data-index="${ index }" data-title="${ todo.title }" type="checkbox" ${ todo.done ? 'checked' :'' } />
					<span>${ todo.title }</span>
					<button data-index="${ index }">Delete</button>
				</label>
			</li>
		`
    });
    listElement.innerHTML = todoListDOM.join('');
}

function init() {
    const formElement = document.querySelector('.form');
    //const loginFormElement = document.querySelector('.form-login');
    const listElement = document.querySelector('.list');
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const todoTitle = event.target.todo_title.value;
        addTodo({
            title: todoTitle
        });
        renderList();
    });

    /*
    loginFormElement.addEventListener('login', (e) => {
        e.preventDefault();
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value
            })
        })

        .then((r) => r.json())
            .then((r) => {
                console.log(r);
            })

        .catch((e) => {
            console.log('Error', e);
        })
    });
	*/

    listElement.addEventListener('change', (e) => {
        updateTodo(e.target.dataset.index, e.target.checked);
    })
    listElement.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            deleteTodo(e.target.dataset.index);
            renderList();
        }
    })

    renderList();
}

/*
function init(){
    const button = document.getElementById("button1");
    const text = document.getElementById("toDo");
    button.addEventListener("click", function() {
        alert(text.value);
    });
}
*/

init();