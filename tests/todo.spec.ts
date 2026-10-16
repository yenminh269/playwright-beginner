import {test, expect } from "../fixtures/pages"
import { goto } from "../utils/helper";

test.describe("Todo list", () => {
  const task = "Drink water";

  test.beforeEach(async({ page }, testInfo) => {
    let url = testInfo.project.use.baseURL;
    
    await goto(page, `${url}`);
  })

  test('Add new task', async({ todoPage }) => {
    await todoPage.addTask(task);

    await expect(todoPage.uncompletedTask
      .filter({ hasText: task }))
      .toBeVisible();
  })

  test('Mark task done', async ({ todoPage }) => {
    await todoPage.addTask(task);

    await todoPage.markTaskCompleted(task);

    await expect(todoPage.completedTask
      .filter({ hasText: task, }))
      .toBeVisible();
  })

  test('Delete task', async ({ todoPage }) => {
    await todoPage.addTask(task);
    await todoPage.markTaskCompleted(task);

    await todoPage.deleteTask(task);

    await expect(todoPage.taskText
      .filter({ hasText: task}))
      .toHaveCount(0);
  })
})
