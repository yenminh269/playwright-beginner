import { test, expect } from '../fixtures/pages'

test.describe('Log out' , () => {
  const email = "abc@gmail.com";
  const password = "rahulshettyacademy";
  const timeout = {timeout: 30_000};

  test.beforeEach(async ({ loginPage, dashboardPage }, testInfo ) => {
    let url = testInfo.project.use.baseURL;

    loginPage.goto(`${url}`);
    
    await expect(loginPage.headingText).toBeVisible(timeout);

    loginPage.logIn(email, password);
    
    await expect(dashboardPage.successMessage).toBeVisible(timeout);
  });
  
  test('Logged out successfully', async ({loginPage, dashboardPage}) => {
    dashboardPage.logout();

    await expect(loginPage.loginButton).toBeVisible(timeout);
  })
})

