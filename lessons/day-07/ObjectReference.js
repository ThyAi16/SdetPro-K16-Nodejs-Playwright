let thyai = {
    name: "thyai",
    age: 24,
    bankAccount: {
        accountNumber: '123456789',
        checking: {
            accountNumber: "123123123",
        }
    }
}
// thyai.name = "thyAi";
// console.log(thyai.name);

// let Ai = thyai;
// Ai.name = "Thy Ai";
// Ai.bankAccount.accountNumber = " 90000000";
//console.log(thyai);
//console.log(Ai);

//Copy object

//1: Shallow copy: vet can, chi handle one object
let nguyenHuynhThyAi = {...thyai};
nguyenHuynhThyAi.name = "Nguyen Huynh Thy Ai";
nguyenHuynhThyAi.bankAccount.accountNumber = "100000000";

//2: Shallow copy: vet can, handle for nested object as well
let nguyenThyAi =  JSON.parse(JSON.stringify(thyai));
nguyenThyAi.bankAccount.accountNumber = "7000000000";
nguyenThyAi.bankAccount.checking.accountNumber = "111";

// console.log(thyai);
// console.log(nguyenHuynhThyAi);
// console.log(nguyenThyAi);

//Get key
console.log(Object.keys(thyai));
//Get value
console.log(Object.values(thyai));
//Get entry
console.log(Object.entries(thyai));
