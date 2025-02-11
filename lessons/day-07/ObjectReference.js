//Example 1:

const { json } = require("stream/consumers");

const thyAi = {
    name: 'Thyai',
    age: '24',
    //Nested object
    bankAccount: {
        accountNumber: '123',
    }
}
// thyAi.name = 'Thy'; // Vi "thyai" la hang so trong object nen co the thay doi duoc value trong object
// console.log(thyAi);

//Shallow copy: chi handle one level object
// let thy = {...thyAi};// vet can
// thy.name = 'thy';
// thy.bankAccount.accountNumber = "321";
// console.log(thyAi);
// console.log(thy);

// Shallow copy - handle for nested object as well
let thyai = JSON.parse(JSON.stringify(thyAi));// Chuyen object qua String va sau do chuyen qua Object lai
thyai.name = 'thyai';
thyai.bankAccount.accountNumber = "321";

// console.log(thyAi);
// console.log(thyai);

// let thy = thyAi;
// thy.name = 'Thy';
// thy.bankAccount.accountNumber = "321";
// console.log(thy);
// console.log(thyAi);

//Examples 2:

const pro5 = {
    name: 'Thyai',
    age: '24',
    //Nested object
    bankAccounts: {
        ckecking: {
            accountNumber: '111',
        },
        saving: {
            accountNumber: '222',
        }
    }
}
// Shallow copy - handle for nested object as well, function khong handle duoc
let proFile = JSON.parse(JSON.stringify(pro5));
proFile.bankAccounts.ckecking.accountNumber = '333';
// console.log(pro5);
// console.log(proFile);

console.log(Object.keys(proFile));
console.log(Object.values(proFile));
console.log(Object.entries(proFile));


