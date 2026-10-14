import {test, expect } from '@playwright/test'
import { TodoPage } from '../pages/TodoPage'

test.describe("Todo page", () => {
  test('Adding a task', async({page}) => {
    const todoPage = new TodoPage(page);
    const task = "Drink water";
    const timeout = {timeout: 30_000};
    

    todoPage.goto("https://microsoftedge.github.io/Demos/demo-to-do/");

    todoPage.addTask(task);

    await expect(page.getByLabel(task)).toBeVisible(timeout);
  })
})