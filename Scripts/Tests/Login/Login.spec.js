import { test, expect } from '../../Fixtures/baseTest';

test.describe.parallel('Authentication Tests', () => {
    test('should login successfully', async ({LoginPage, testdata}) => {
        await LoginPage.navigate(testdata.adminUrl);
        await LoginPage.login(testdata.admin.username, testdata.admin.password);
        await expect(LoginPage.page).toHaveURL(testdata.admin.dashboardUrl);
    });
    test('Invalid credentials', async ({LoginPage, testdata}) => {
        await LoginPage.navigate(testdata.adminUrl);
        await LoginPage.login(testdata.admin.username, 'invalidpassword');
        await expect(LoginPage.page.getByText('Invalid credentials')).toBeVisible();
    });
    test('should show error message for required fields', async ({LoginPage, testdata}) => {
        await LoginPage.navigate(testdata.adminUrl);
        await LoginPage.login('', '');
        await expect(LoginPage.page.getByText('Username is required')).toBeVisible();
        await expect(LoginPage.page.getByText('Password is required')).toBeVisible();
    });
    test('User not found', async ({LoginPage, testdata}) => {
        await LoginPage.navigate(testdata.adminUrl);
        await LoginPage.login('invalidusername', testdata.admin.password);
        await expect(LoginPage.page.getByText('User not found')).toBeVisible();
    });
    test('should logout successfully', async ({LoginPage, testdata}) => {
        await LoginPage.navigate(testdata.adminUrl);
        await LoginPage.login(testdata.admin.username, testdata.admin.password);
        await LoginPage.logout(testdata.admin.displayName);
        await expect(LoginPage.page).toHaveURL(testdata.adminUrl);
    });

    
});