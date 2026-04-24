import { test, expect } from '../../Fixtures/baseTest';
import { createMailClient, createInbox, getResetLink } from '../../Utils/mailSlurp';

test.describe('Forgot Password Tests', () => {

    // ✅ UI-only tests (can run parallel)
    test.describe.parallel('UI Validations', () => {

        test('should navigate to forgot password page', async ({ loginPage, testData }) => {
            await loginPage.navigate(testData.adminUrl);
            await loginPage.clickForgotPassword();

            await expect(loginPage.page.getByText('Forgot password')).toBeVisible();
        });

        test('should show error for invalid email', async ({ loginPage }) => {
            await loginPage.navigate(process.env.BASE_URL);
            await loginPage.clickForgotPassword();

            await loginPage.submitEmail('invalidemail');
            await expect(loginPage.page.getByText('Invalid email address')).toBeVisible();
        });

        test('back button should navigate to login', async ({ loginPage }) => {
            await loginPage.navigate(process.env.BASE_URL);
            await loginPage.clickForgotPassword();

            await loginPage.backToLogin();
            await expect(loginPage.page.getByText('Sign in')).toBeVisible();
        });

    });

    // 🔥 Full reset flow (must be serial)
    test.describe.serial('Reset Password Flow', () => {

        let mailslurp;
        let inbox;
        let resetLink;
        const newPassword = 'Test@1234';

        test('trigger forgot password', async ({ loginPage }) => {
            mailslurp = createMailClient();
            inbox = await createInbox(mailslurp);

            await loginPage.navigate(process.env.BASE_URL);
            await loginPage.clickForgotPassword();
            await loginPage.submitEmail(inbox.emailAddress);
        });

        test('get reset link from email', async () => {
            resetLink = await getResetLink(mailslurp, inbox.id);
            expect(resetLink).toBeTruthy();
        });

        test('reset password using link', async ({ page, loginPage }) => {
            await page.goto(resetLink);

            await loginPage.resetPassword(newPassword, newPassword);

            await expect(page.getByText('Password reset successful')).toBeVisible();
        });

        test('login with new password', async ({ loginPage }) => {
            await loginPage.navigate(process.env.BASE_URL);
            await loginPage.login(inbox.emailAddress, newPassword);

            await expect(loginPage.page).toHaveURL(/dashboard/);
        });

    });

});