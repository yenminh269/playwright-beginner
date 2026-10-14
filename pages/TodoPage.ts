import { Page, Locator} from '@playwright/test';

export class TodoPage {
  readonly inputTask : Locator;
  readonly submitButton : Locator;

  constructor(private readonly page : Page){
    this.inputTask = page.locator('#new-task');
    this.submitButton = page.getByRole('button');
  }

  async goto(url : string) : Promise<void> {
    await this.page.goto(`${url}`);
  }

  async addTask(task : string) : Promise<void> {
    this.inputTask.fill(task);

    this.submitButton.click();
  }
}