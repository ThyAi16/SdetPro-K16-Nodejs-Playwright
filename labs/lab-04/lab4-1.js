/*
Creating 1 object representing Bank Count Number with below structure:
{
    accountNumber: String,
    routingNumber: String,
    balance: Number
}
. Creating another Bank Account Object which clone from the previous one and update the accountNumber only . Put them into ann array call: bankAccounts
. Write a consolse interface app to:
allow user to find account by using accountNumber, if the account is existing, print the name and balance info out (NOT all the object)
allow user to withdraw the money and avoid user to take more than current balance
Note: Strongly recommend to create functions to process each tasks
=== Banking application===
1. Find an account
2. Update balance
0. Exit the program
*/
//Readability, extendable, maintainnable --> reliable

const readline = require('readline-sync');

//In memory DB
const account1 = {
    accountName: 'Thy',
    accountNumber: '1234567',
    routingNumber: '12345',
    balance: 1000000,
}

const account2 = JSON.parse(JSON.stringify(account1));
account2.accountName = 'Thyai';
account2.accountNumber = '7654321';

const accounts = [account1, account2];

//Program interface
bankApp();

//Support functions

function bankApp() {
    let isInteracting = true;
    while(isInteracting) {
        printTheAppMenu();
        const userOption = getUserOption();        
        switch(userOption) {
            case 1:
                const foundAccount = findAccount();
                if(foundAccount.accountNumber) {
                    const {accountName, balance} = foundAccount;
                    console.log(`Account name: ${accountName}, balance: ${balance}`);
                } else {
                    console.log('Account not found!!!');
                }
                break;
            case 2:
                updateBalance();
                break;
            case 0:
                isInteracting = false;
                break;
            default:
                console.log('Wrong option!!!');
        }
    }
    console.log('See u next time!');
}

function printTheAppMenu() {
    console.log(`
=== Banking application===
1. Find an account
2. Update balance
0. Exit the program
`);
}

function getUserOption() {
    return Number(readline.question('Please select an option: '));
}

function findAccount() {
    let foundAccount =  {};
    const inputAccountNumber = readline.question('Please enter account number: ');
    for (const account of accounts) {
        if(account.accountNumber === inputAccountNumber) {
            foundAccount = account;
            break;
        }
    }
    // If account found, reassign foundaccount for the found one
    return foundAccount;
}

function updateBalance() {
    const MAX_ALLOWED_ATTEMP = 3;
    let attempts = 0;
    do {
        const foundAccount = findAccount();
        const isNotFound = foundAccount.accountNumber === undefined;
        if (isNotFound) {
            console.log(`Attempt time: ${attempts + 1}`);
            attempts++;
        } else {
            //Logic to update balance and exit the function
            const {balance} = foundAccount;
            console.log(`Your balance is: ${balance}`);
            const expectedWithDrawMoney = Number(readline.question('Please input withdraw amount: '));
            if (expectedWithDrawMoney> balance) {
                console.log('Insufficient balance!!!');
            } else {
                //... loggin about succed withdraw
                //... update user's balance
                console.log('Succeed!!!');
                foundAccount.balance = balance - expectedWithDrawMoney;
                attempts = MAX_ALLOWED_ATTEMP;
            }
        }
    } while(attempts < MAX_ALLOWED_ATTEMP)
}