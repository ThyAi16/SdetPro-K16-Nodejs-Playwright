import ExternalLoginPage from "./ExternalLoginPage";
import InternalLoginPage from "./InternalLoginPage";
import LoginPage from "./LoginPage";
import LoginTestFlow from "./LoginTestFlow";

let internalLoginPage: LoginPage = new InternalLoginPage();
let externalLoginPage: LoginPage = new ExternalLoginPage();

let internalLoginData = {
  username: "teo",
  password: "1234",
};

let externalLoginData = {
  username: "ti",
  password: "4321",
};

LoginTestFlow.login(
  internalLoginPage,
  internalLoginData.username,
  internalLoginData.password
);
LoginTestFlow.login(
  externalLoginPage,
  externalLoginData.username,
  externalLoginData.password
);
