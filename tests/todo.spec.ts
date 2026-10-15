import {test, expect, Locator } from '@playwright/test'
import { TodoPage } from '../pages/TodoPage'

test.describe("Todo page", () => {
  let todoPage : TodoPage;
  const task = "Drink water";
  const timeout = {timeout: 30_000};

  test.beforeEach(async({page}) => {
    todoPage = new TodoPage(page);

    todoPage.goto("https://microsoftedge.github.io/Demos/demo-to-do/");
  })

  test('Add new task', async() => {
    todoPage.addTask(task);

    await expect (todoPage.uncompleteTask.filter({ 
      hasText: task 
    })).toBeVisible(timeout);
  })

  test('Mark task done', async () => {
    todoPage.markTaskCompleted(task);

    await expect(todoPage.completedTask.filter({
      hasText: task,
    })).toBeVisible(timeout);
  })

  test('Delete task', async (page) => {
    todoPage.addTask(task);
    
    todoPage.markTaskCompleted(task);

    todoPage.deleteTask(task);
  })
})
