console.log();
setTimeout(callbackFunction.blink())

function callbackFunction(name) {
    console.log(this.age);
    console.log(`2. ${name} oiw, `);
}

