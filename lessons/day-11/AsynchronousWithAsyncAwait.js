/**
 * 1. Send request -> get respone | Asynchronous
 * 2. Process the response | Asynchronous
 * 3. Validate the response | Synchronous
 */

const url = "url demo";
main();

async function main() {
    const response = await sendRequest(url);
    const statusCode = await processResponse(response);
    validateResponse(statusCode);
    console.log('Done!!!');
}

//Mimic Asynchronous
function sendRequest(url) {
    console.log(`1. Sending request to the endpoint ${url}`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({status: 200});
        }, 2 * 1000);
        })
}

//Mimic Asynchronous
function processResponse(response) {
    console.log(`2. Processing the response...`);
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            resolve(response.status);
        }, 3 * 1000);
    })
}

//Mimic Synchronous
function validateResponse(responseStatus) {
    console.log(`3. Validating the response...`);
    if (responseStatus === 200) {
        console.log('PASSED');
    } else {
        console.log('FAILED');
    }
}

// Callback -> wrap into promise -> async/await syntax
