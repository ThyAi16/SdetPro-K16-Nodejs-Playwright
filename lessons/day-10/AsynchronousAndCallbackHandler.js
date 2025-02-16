/**
 * 1. Send request -> get respone | Asynchronous
 * 2. Process the response | Asynchronous
 * 3. Validate the response | Synchronous
 */

const url = 'url demo';

// Handle asynchronous | Callback hell
sendRequest(url, function(response) {
    // response: {status: 200}
    processResponse(response, function(statusCode) {
        // statuscode: 200
        validateResponse(statusCode);
    })
})

//Mimic Asynchronous
function sendRequest(url, callbackFn) {
    console.log(`1. Sending request to the endpoint ${url}`);
    setTimeout(function() {
        callbackFn({status: 200});
    }, 2* 1000);
}

//Mimic Asynchronous
function processResponse(respone, callbackFn) {
    console.log(`2. Processing the response ....`);
    setTimeout(function () {
        callbackFn(respone.status);
    }, 3* 1000);
}

// Mimic Synchronous
function validateResponse(responseStatus) {
    console.log(`3. Validating the response ...`);
    if (responseStatus === 200) {
        console.log('PASSED');
    } else {
        console.log('FAILED');
    }
}