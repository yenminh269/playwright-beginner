import { test, expect } from '../fixtures/pages'

test.describe('Log out' , () => {
  const email = "abc@gmail.com";
  const password = "rahulshettyacademy";
  const timeout = {timeout: 30_000};

  test.beforeEach(async ({ loginPage }, testInfo ) => {
    let url = testInfo.project.use.baseURL;

    loginPage.goto(`${url}`);

    loginPage.logIn(email, password);
  });
  
  test('Logged out successfully', async ({loginPage, dashboardPage}) => {
    await expect(dashboardPage.successMessage).toBeVisible(timeout);

    dashboardPage.logout();

    await expect(loginPage.loginButton).toBeVisible(timeout);
  })
})

