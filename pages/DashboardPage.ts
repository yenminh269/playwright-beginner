import {Page} from '@playwright/test';
export class DashboardPage {
  readonly logoutButton;
  readonly successMessage;

  constructor(page : Page){
    this.logoutButton = page.getByRole('button', { name: 'Log Out' });
    this.successMessage = page.getByText("You are successfully logged in.");
  }

  async logout() : Promise<void> {
    await this.logoutButton.click();
  }
}

