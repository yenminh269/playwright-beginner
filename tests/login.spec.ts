import { test, expect } from '../fixtures/pages';
import { goto } from '../utils/helper';

test.describe('Log In functionality', () => {
  const email = "abc@gmail.com";

  test.beforeEach(async ({ page}, testInfo ) => {
    let url = testInfo.project.use.baseURL;

    await goto(page, `${url}`);
  });

  test('Logged in successfully', async ({loginPage, dashboardPage}) => {
    await loginPage.logIn(email, "rahulshettyacademy");

    await expect(dashboardPage.successMessage).toBeVisible();
  })

  test('Incorrect password', async ({loginPage}) => {
    await loginPage.logIn(email, "rahul");

    await expect(loginPage.errorMessage).toBeVisible();
  })

  test('Empty input', async ({loginPage}) => {
    await loginPage.logIn("", "");

    await expect(loginPage.errorMessage).toBeVisible();
  })
})
