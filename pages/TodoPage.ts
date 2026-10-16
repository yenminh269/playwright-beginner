import { Page, Locator} from '@playwright/test';
export class TodoPage {
  readonly taskInput : Locator;
  readonly submitButton : Locator;
  readonly uncompletedTask : Locator;
  readonly completedTasksList: Locator;
  readonly completedTask : Locator;
  readonly pageHeading : Locator;
  readonly completedParentTag : Locator;
  readonly taskText : Locator;

  constructor(private readonly page : Page){
    this.pageHeading = page.getByText('📋 My tasks');
    this.completedParentTag = page.locator('li.completed');
    this.taskInput = page.locator('#new-task');
    this.submitButton = page.getByRole('button');
    this.uncompletedTask = page.locator('label[title="Complete task"]');
    this.completedTasksList = page.locator('.completed');
    this.completedTask = page.locator('label[title="Reopen task"]');
    this.taskText = page.locator('span.text');
  }

  async addTask(task : string) : Promise<void> {
    await this.taskInput.fill(task);

    await this.submitButton.click();

    console.log("Task is added");
  }

  async markTaskCompleted(task : string) : Promise<void> {
    await this.uncompletedTask.filter({ hasText: task }).click();

    console.log("Task is marked completed");
  }

  async deleteTask(task : string) : Promise<void> {
    //get the row of task
    const row = this.completedParentTag.filter({
      has : this.completedTask.filter({
        hasText: task,
      })
    });

    const deleteButton = row.locator('button.delete');
    
    await deleteButton.click();
    
    console.log("Task is deleted");
  }
}
