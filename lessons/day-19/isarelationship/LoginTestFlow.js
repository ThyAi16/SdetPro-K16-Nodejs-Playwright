"use strict";
// Controlller
Object.defineProperty(exports, "__esModule", { value: true });
var LoginPageFlow = /** @class */ (function () {
    function LoginPageFlow() {
    }
    LoginPageFlow.login = function (loginPage, username, password) {
        loginPage.inputUsername(username);
        loginPage.inputPassword(password);
        loginPage.clickOnLoginButton();
    };
    return LoginPageFlow;
}());
exports.default = LoginPageFlow;
