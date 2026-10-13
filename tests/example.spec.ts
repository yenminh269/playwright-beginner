import { test, expect } from '@playwright/test';

test.describe('Log In functionality', () => {
  const email = "abc@gmail.com";

  test.beforeEach(async ({ page }, testInfo) => {
    const url = testInfo.project.use.baseURL;
    await page.goto(`${url}`);
  });

  test('Log in successfully', async ({ page }) => {
    const password = "rahulshettyacademy";

    // Fill email
    await page.getByPlaceholder('Username').fill(email);

    // Fill password
    await page.getByPlaceholder('Password').fill(password);

    //checkbox 
    await expect(page.locator('#chkboxOne')).toBeVisible();
    await page.locator('#chkboxOne').check();
    
    await expect(page.locator('#chkboxTwo')).toBeVisible();
    await page.locator('#chkboxTwo').check();

    //verify sign in button enabled
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeEnabled();

    //Click sign in button
    await page.getByRole('button', { name: 'Sign In' }).click();

    //verify user log in successfully
    await expect(page.getByText('Hello ' + email + ',')).toBeVisible();

    await expect(page.getByText("You are successfully logged in.")).toBeVisible();

    //console log the message
    console.log(await page.locator('p').textContent());
  });

  test('Incorrect password', async ({ page }) => {
    const password = "rahul";

    // Fill email
    await page.getByPlaceholder('Username').fill(email);

    // Fill password
    await page.getByPlaceholder('Password').fill(password);

    //Click sign in button
    await page.getByRole('button', { name: 'Sign In' }).click();

    //display error msg
    console.log(await page.locator('p.error').textContent());
  })
})
