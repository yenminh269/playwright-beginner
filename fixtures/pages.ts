import { test as base } from '@playwright/test'

import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { TodoPage } from '../pages/TodoPage';

type AppFixtures = {loginPage : LoginPage, dashboardPage : DashboardPage, todoPage : TodoPage};

export const test = base.extend<AppFixtures>({
  loginPage : async ({page}, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage : async ({page}, use) => {
    await use(new DashboardPage(page));
  },
  todoPage : async ({page}, use) => {
    await use(new TodoPage(page));
  },
});

export {expect} from '@playwright/test'
