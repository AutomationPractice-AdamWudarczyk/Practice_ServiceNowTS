import {test, expect} from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { loadSecrets } from '@utils/config';

const { SNValid_USER, SNValid_PASS } = loadSecrets();

test.describe ('Login tests for ServiceNow', () => {
    let login: ReturnType<typeof LoginPage>

    test.beforeEach(async ({ page }) => {
        login = LoginPage(page);
        await login.goto();
    });

    test('valid login works', async ({ page }) => {
        const login = LoginPage(page);
        await login.goto();
        await login.loginSuccess(SNValid_USER, SNValid_PASS);
        await expect(page).toHaveURL(/.*now\/nav\/ui\/classic.*/);
    });

    test('invalid login fails', async ({ page }) => {
        const login = LoginPage(page);
        await login.goto();
        await login.loginFailure('wrongUser', 'wrongPass');
        await expect(login.errorMsg).toContainText(/invalid/i, { timeout: 10000 });
    });

})

