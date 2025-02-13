console.log('1. 19h');
setTimeout(callBackFunction, 500);
console.log('3. Learning JS');
function callBackFunction() {
    console.log('2. Open Skype');
    console.log(this.age);
}