import {test, expect} from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';

const SN_USER = 'admin';
const SN_PASS = 'OhluX%5cMJ2!';

test.describe ('Login tests for ServiceNow', () => {
    let login: ReturnType<typeof LoginPage>

    test.beforeEach(async ({ page }) => {
        login = LoginPage(page);
        await login.goto();
    });

    test('TBD', async ({ page }) => {
        //TBD
    });

    test('TBD', async ({ page }) => {
        //TBD
    });


})

