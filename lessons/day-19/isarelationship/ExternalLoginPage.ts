import LoginPage from "./LoginPage";

export default class ExternalLoginPage extends LoginPage {
  private usernameSe = "ext-username";
  private passwordSe = "ext-password";
  private loginBtnSe = "ext-loginBtn";

  public inputUsername(username: string): void {
    console.log(
      `Input username: ${this.usernameSe} for selector ${this.usernameSe}`
    );
  }
  public inputPassword(password: string): void {
    console.log(
      `Input password: ${this.passwordSe} foe selector ${this.passwordSe}`
    );
  }
  public clickOnLoginButton(): void {
    console.log(`Click on login button for selector ${this.loginBtnSe}`);
  }
}
