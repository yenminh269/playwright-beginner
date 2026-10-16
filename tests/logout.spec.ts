import { test, expect } from '../fixtures/pages'
import { goto } from '../utils/helper';

test.describe('Log out' , () => {
  const email = "abc@gmail.com";
  const password = "rahulshettyacademy";

  test.beforeEach(async ({ loginPage, page }, testInfo ) => {
    let url = testInfo.project.use.baseURL;

    await goto(page, `${url}`);

    await loginPage.logIn(email, password);
  });
  
  test('Logged out successfully', async ({loginPage, dashboardPage}) => {
    await dashboardPage.logout();

    await expect(loginPage.loginButton).toBeVisible();
  })
})

