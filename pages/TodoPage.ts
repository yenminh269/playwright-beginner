import { Page, Locator, expect} from '@playwright/test';

export class TodoPage {
  readonly inputTask : Locator;
  readonly submitButton : Locator;
  readonly uncompleteTask : Locator;
  readonly completedTasksList: Locator;
  readonly completedTask : Locator;
  readonly heading : Locator;
  readonly timeout = {timeout: 30_000};

  constructor(private readonly page : Page){
    this.heading = page.getByText('📋 My tasks');
    this.inputTask = page.locator('#new-task');
    this.submitButton = page.getByRole('button');
    this.uncompleteTask = page.locator('label[title="Complete task"]');
    this.completedTasksList = page.locator('.completed');
    this.completedTask = page.locator('label[title="Reopen task"]');
  }

  async goto(url : string) : Promise<void> {
    await this.page.goto(`${url}`);
  }

  async addTask(task : string) : Promise<void> {
    this.inputTask.fill(task);

    this.submitButton.click();
  }

  async markTaskCompleted(task : string) : Promise<void> {
    this.addTask(task);

    this.uncompleteTask.filter({ hasText: task }).click();
  }

  async deleteTask(task : string) : Promise<void> {
    const row = this.page.locator('li.task.completed').filter({
      has : this.page.locator('span.text', { hasText: task}),
    });

    await row.locator('button.delete').click();
  }
  
}
