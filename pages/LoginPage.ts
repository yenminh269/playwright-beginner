import  { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly email : Locator;
  readonly password: Locator;
  readonly loginButton : Locator;
  readonly checkBoxOne : Locator;
  readonly checkBoxTwo: Locator;
  readonly errorMessage : Locator;

  constructor(private readonly page : Page){
    this.email = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Sign In' });
    this.checkBoxOne = page.locator('#chkboxOne');
    this.checkBoxTwo = page.locator('#chkboxTwo');
    this.errorMessage = page.getByText('* Incorrect username or password');
  }

  async goto(url : string) : Promise<void> {
    await this.page.goto(`${url}`);
  }

  async logIn(email : string, password : string) : Promise<void> {
    await this.email.fill(email);

    await this.password.fill(password);
    
    //check 2 checkbox
    await expect(this.checkBoxOne).toBeVisible();
    await this.checkBoxOne.check();
        
    await expect(this.checkBoxTwo).toBeVisible();
    await this.checkBoxTwo.check();
    
    //verify sign in button enabled
    await expect(this.loginButton).toBeEnabled();

    //Click log in button
    await this.loginButton.click();
  }
}
