import { expect } from '@playwright/test';

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = 'input[name="username"]';
        this.passwordInput = 'input[name="password"]';
        this.loginButton = '//button[@type="submit"]';
        this.errorMessage = (text) => `text=${text}`;
        this.forgotPasswordButton = '//button[normalize-space()="Forgot Password?"]';
        this.resetPasswordLink = '//span[normalize-space()="Send Reset Link"]';
        this.emailInput = '//input[@placeholder="Enter your email address"]';
        this.resetPasswordButton = '//a[normalize-space()="Reset My Password"]';
        this.newPasswordInput = '//input[@id="password"]';
        this.confirmPasswordInput = '//input[@id="confirmPassword"]';
        this.resetPassword = '//button[normalize-space()="Reset Password"]';
        this.errorMessage = (text) => `text=${text}`;
        this.successMessage = (text) => `text=${text}`;
        this.backToLoginButton = '//span[normalize-space()="Back to Login"]';
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    async loginExternal(username,password) {
        await this.page.goto(this.externalUrl);
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButtonExternal);
    }

    async verifyError(message) {
        await this.page.locator(this.errorMessage(message)).waitFor();
    }

    async logout(username) {
        await this.page.getByText(username).click();
        await this.page.getByRole('button', { name: 'Sign out' }).click();
        console.log('Logged out successfully');
    }
    async forgotPassword(email) {
        await this.page.click(this.forgotPasswordButton);
        await expect(this.page.getByText('Forgot password')).toBeVisible();
        await this.page.fill(this.emailInput, email);
        await this.page.click(this.resetPasswordLink);
        await expect(this.page.getByText('Reset Password')).toBeVisible();
    }
    async getResetPasswordLink(email) {
        const mailslurp = createMailClient();

        // 1️⃣ Create inbox FIRST
        const inbox = await createInbox(mailslurp);

        // 2️⃣ Use this email in UI
        await loginPage.submitEmail(inbox.emailAddress);

        // 3️⃣ Get reset link
        const resetLink = await getResetPasswordLink(inbox.id);

        await page.goto(resetLink);
    }
    async resetPassword(newPassword, confirmPassword = newPassword) {
        await this.page.click(this.resetPasswordButton);
        await this.page.fill(this.newPasswordInput, newPassword);
        await this.page.fill(this.confirmPasswordInput, confirmPassword);
        await this.page.click(this.resetPassword);
        await expect(this.page.getByText('Password reset successfully')).toBeVisible();
    }
    async backToLogin() {
        await this.page.click(this.backToLoginButton);
        await expect(this.page.getByText('Sign in')).toBeVisible();
    }
}