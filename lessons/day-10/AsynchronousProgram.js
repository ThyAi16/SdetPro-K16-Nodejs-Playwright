console.log('1. 19h');
//setTimeout(callBackFunction.bind(undefined, 'Thyai'), 2 * 500); // Thực thi cái gì đó sau thời gian nhất định
setTimeout(callBackFunction.bind({age: 20}, 'Thyai'), 2 * 500);
console.log('3. Learning JS');

function callBackFunction(name) {
    console.log(`2. ${name} open Zoom`);
    console.log(this.age);
}