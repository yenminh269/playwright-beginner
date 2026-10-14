import { test, expect } from '../fixtures/pages';

test.describe('Log In functionality', () => {
  const email = "abc@gmail.com";
  const timeout = {timeout: 30_000};

  test.beforeEach(async ({ loginPage}, testInfo ) => {
    let url = testInfo.project.use.baseURL;

    loginPage.goto(`${url}`);
  });

  test('Logged in successfully', async ({loginPage, dashboardPage}) => {
    loginPage.logIn(email, "rahulshettyacademy");

    await expect(dashboardPage.successMessage).toBeVisible(timeout);
  })

  test('Incorrect password', async ({loginPage}) => {
    loginPage.logIn(email, "rahul");

    await expect(loginPage.errorMessage).toBeVisible(timeout);
  })

  test('Empty input', async ({loginPage}) => {
    loginPage.logIn("", "");

    await expect(loginPage.errorMessage).toBeVisible(timeout);
  })
})
