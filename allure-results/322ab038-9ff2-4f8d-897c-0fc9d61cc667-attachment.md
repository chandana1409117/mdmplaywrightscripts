# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\Login\ForgotPassword.spec.js >> Forgot Password Tests >> back button should navigate to login page
- Location: Scripts\Tests\Login\ForgotPassword.spec.js:32:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Sign in')
Expected: visible
Error: strict mode violation: getByText('Sign in') resolved to 2 elements:
    1) <p class="text-xs text-slate-600 font-normal">Sign in to your account</p> aka getByText('Sign in to your account')
    2) <span>Sign In</span> aka getByRole('button', { name: 'Sign In' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Sign in')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e5]:
    - generic [ref=e6]:
      - img "bgImage" [ref=e7]
      - generic [ref=e10]:
        - heading "Legal Notice" [level=3] [ref=e11]
        - paragraph [ref=e12]: This website is the property of MD Manage and contains highly confidential and federally protected health information. Unauthorized access, copying, modifying or destroying any information is a crime under State and Federal Laws. Perpetrators of such actions will be held accountable to the fullest of the law. Unauthorized use or release of any information contained on this website can and will be prosecuted under HIPAA (Health Insurance Portability and Accountability Act of 1996) guidelines. Access to this website is strictly restricted to MD Manage staff and authorized agents.
    - generic [ref=e14]:
      - img "MD Manage" [ref=e17]
      - generic [ref=e18]:
        - heading "Welcome Back" [level=1] [ref=e19]
        - paragraph [ref=e20]: Sign in to your account
      - generic [ref=e21]:
        - generic [ref=e22]:
          - img [ref=e24]
          - heading "Login Details" [level=3] [ref=e27]
        - generic [ref=e28]:
          - generic [ref=e29]:
            - generic [ref=e30]:
              - generic [ref=e31]: Username / Email *
              - textbox [ref=e32]
            - generic [ref=e33]:
              - generic [ref=e34]: Password *
              - generic [ref=e35]:
                - textbox [ref=e36]
                - button [ref=e37] [cursor=pointer]:
                  - img [ref=e38]
          - button "Forgot Password?" [ref=e44] [cursor=pointer]
          - button "Sign In" [ref=e45] [cursor=pointer]:
            - generic [ref=e46]:
              - generic [ref=e47]: Sign In
              - img [ref=e48]
      - paragraph [ref=e52]:
        - img [ref=e53]
        - generic [ref=e55]: Protected by industry-standard encryption
  - status [ref=e61]: Password reset link has been sent to your email
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   constructor(page) {
  5  |       this.page = page;
  6  |       this.usernameInput = 'input[name="username"]';
  7  |       this.passwordInput = 'input[name="password"]';
  8  |       this.loginButton = '//button[@type="submit"]';
  9  |       this.errorMessage = (text) => `text=${text}`;
  10 |       this.forgotPasswordButton = '//button[normalize-space()="Forgot Password?"]';
  11 |       this.resetPasswordLink = '//span[normalize-space()="Send Reset Link"]';
  12 |       this.emailInput = '//input[@placeholder="Enter your email address"]';
  13 |       this.resetPasswordButton = '//a[normalize-space()="Reset My Password"]';
  14 |       this.newPasswordInput = '//input[@id="password"]';
  15 |       this.confirmPasswordInput = '//input[@id="confirmPassword"]';
  16 |       this.resetPassword = '//button[normalize-space()="Reset Password"]';
  17 |       this.errorMessage = (text) => `text=${text}`;
  18 |       this.successMessage = (text) => `text=${text}`;
  19 |       this.backToLoginButton = '//span[normalize-space()="Back to Login"]';
  20 |   }
  21 | 
  22 |   async navigate(url) {
  23 |       await this.page.goto(url);
  24 |   }
  25 | 
  26 |   async login(username, password) {
  27 |       await this.page.fill(this.usernameInput, username);
  28 |       await this.page.fill(this.passwordInput, password);
  29 |       await this.page.click(this.loginButton);
  30 |   }
  31 | 
  32 |   async verifyError(message) {
  33 |       await this.page.locator(this.errorMessage(message)).waitFor();
  34 |   }
  35 | 
  36 |   async logout(username) {
  37 |       await this.page.click(`//button[@title='${username}']`);
  38 |       await this.page.getByRole('button', { name: 'Sign out' }).click();
  39 |       console.log('Logged out successfully');
  40 |   }
  41 |   async forgotPassword(email) {
  42 |       await this.page.click(this.forgotPasswordButton);
  43 |       await expect(this.page.getByText('Forgot password')).toBeVisible();
  44 |       await this.page.fill(this.emailInput, email);
  45 |       await this.page.click(this.resetPasswordLink);
  46 |       await expect(this.page.getByText('Reset Password')).toBeVisible();
  47 |   }
  48 |   async resetPassword(newPassword, confirmPassword = newPassword) {
  49 |       await this.page.click(this.resetPasswordButton);
  50 |       await this.page.fill(this.newPasswordInput, newPassword);
  51 |       await this.page.fill(this.confirmPasswordInput, confirmPassword);
  52 |       await this.page.click(this.resetPassword);
  53 |       await expect(this.page.getByText('Password reset successfully')).toBeVisible();
  54 |   }
  55 |   async backToLogin() {
  56 |     await this.page.click(this.backToLoginButton);
> 57 |     await expect(this.page.getByText('Sign in')).toBeVisible();
     |                                                  ^ Error: expect(locator).toBeVisible() failed
  58 |   }
  59 | }
```