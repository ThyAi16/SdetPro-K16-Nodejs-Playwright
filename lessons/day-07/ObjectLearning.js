//CREATE
let thyAi = {
    name: "Thyai",
    age: 24,
    "my gender": "M", //Neu co space hoac ky tu dac biet
}

//READ
console.log(thyAi.name);
console.log(thyAi["my gender"]);

//UPDATE
thyAi.name = "Thy";
console.log(thyAi);

//Destructure
const {name, age, ["my gender"]: gender} = thyAi;
say(thyAi);

//Function with destructured params
function say({name}) {
    console.log(`Hello, my name is ${name}`);
}

//DELETE
delete thyAi.name;
console.log('Delete name: ', thyAi);