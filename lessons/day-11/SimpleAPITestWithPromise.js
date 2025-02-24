const { todo } = require("node:test");

const todosEndpoint = 'https://jsonplaceholder.typicode.com/todos/1';
//console.log(fetch(todosEndpoint));

// fetch(todosEndpoint)
//     .then(getResponse)
//     .then(validateResponse);

//Async await
main();

async function main() {
    const rawResponse = await fetch(todosEndpoint);
    const todo = await getResponse(rawResponse);
    validateResponse(todo);
    console.log('Done!!!');
}

// Details implementation
function getResponse(rawResponse) {
    return rawResponse.json();
}

function validateResponse(todo) {
    console.log(todo);
    if (todo.completed) {
        console.log('Task completed');
    } else {
        console.log('Task is in progress');
    }
}
