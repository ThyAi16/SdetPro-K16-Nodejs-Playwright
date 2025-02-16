const todosEndpoint = 'https://jsonplaceholder.typicode.com/todos/1';

console.log(fetch(todosEndpoint));
fetch(todosEndpoint)
    .then(getResponse)
    .then(validateResponse);

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