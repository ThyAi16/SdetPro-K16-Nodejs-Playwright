import LoginPage from "./LoginPage";

export default class InternalLoginPage extends LoginPage {
  private usernameS = "#username";
  private password = "#password";
  private loginBtnS = "#loginBtn";

  public inputUsername(username: string): void {
    console.log(`Input username: ${username} for selector ${this.usernameS}`);
  }

  public inputPassword(password: string): void {
    console.log(`Input password: ${password} for selector ${this.password}`);
  }

  public clickOnLoginButton(): void {
    console.log(`Click on login button for selector ${this.loginBtnS}`);
  }
}
