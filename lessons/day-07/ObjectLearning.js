//Create
let Thyai = {
    name: "Thy Ai",
    age: "24",
    "my-gender": "F"
}
//Read
console.log(Thyai.name);
console.log(Thyai["my-gender"]);
//Update
Thyai.name = "Thy";
console.log(Thyai);

//Destructure
const { name, age, ["my-gender"]: gender } = Thyai;
sayHello(Thyai);

//Function with destructured params
function sayHello({ name }) {
    console.log(`My name is ${name}`);
}
//Delete
delete Thyai.name;
console.log(Thyai);