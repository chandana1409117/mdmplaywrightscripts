# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\Login\ForgotPassword.spec.js >> Forgot Password Tests >> should navigate to reset password page
- Location: Scripts\Tests\Login\ForgotPassword.spec.js:9:5

# Error details

```
TypeError: LoginPage.resetPassword is not a function
```

# Page snapshot

```yaml
- generic [ref=e5]:
  - progressbar "three-dots-loading" [ref=e7]:
    - img [ref=e8]
  - generic [ref=e12]:
    - img "bgImage" [ref=e13]
    - generic [ref=e16]:
      - heading "Legal Notice" [level=3] [ref=e17]
      - paragraph [ref=e18]: This website is the property of MD Manage and contains highly confidential and federally protected health information. Unauthorized access, copying, modifying or destroying any information is a crime under State and Federal Laws. Perpetrators of such actions will be held accountable to the fullest of the law. Unauthorized use or release of any information contained on this website can and will be prosecuted under HIPAA (Health Insurance Portability and Accountability Act of 1996) guidelines. Access to this website is strictly restricted to MD Manage staff and authorized agents.
  - generic [ref=e19]:
    - progressbar "three-dots-loading" [ref=e21]:
      - img [ref=e22]
    - generic [ref=e26]:
      - generic [ref=e27]:
        - generic:
          - img "MD Manage"
      - generic [ref=e28]:
        - heading "Forgot Password" [level=1] [ref=e29]
        - paragraph [ref=e30]: Enter your email to reset your password
      - generic [ref=e31]:
        - generic [ref=e32]:
          - img [ref=e34]
          - heading "Reset Password" [level=3] [ref=e37]
        - generic [ref=e38]:
          - generic [ref=e39]:
            - generic [ref=e40]: Email Address *
            - textbox "Enter your email address" [ref=e41]: chandanad@trinovatek.com
          - button "Sending..." [disabled] [ref=e42]:
            - generic [ref=e43]:
              - img [ref=e44]
              - generic [ref=e46]: Sending...
      - link "Back to Login" [ref=e48] [cursor=pointer]:
        - /url: /login
        - img [ref=e49]
        - generic [ref=e52]: Back to Login
      - paragraph [ref=e54]: Need help? Contact support for assistance
```

# Test source

```ts
  1  | import { test, expect } from '../../Fixtures/baseTest';
  2  | 
  3  | test.describe.parallel('Forgot Password Tests', () => {
  4  | test('should navigate to forgot password page', async ({ LoginPage, testdata }) => {
  5  |     await LoginPage.navigate(testdata.adminUrl);
  6  |     await LoginPage.forgotPassword(testdata.forgotPassword.email);
  7  |     await expect(LoginPage.page.getByText('Forgot password')).toBeVisible();
  8  | });
  9  | test('should navigate to reset password page', async ({ LoginPage, testdata }) => {
  10 |     await LoginPage.navigate(testdata.adminUrl);
  11 |     await LoginPage.forgotPassword(testdata.forgotPassword.email);
> 12 |     await LoginPage.resetPassword(testdata.resetPassword.newPassword, testdata.resetPassword.confirmPassword);
     |                     ^ TypeError: LoginPage.resetPassword is not a function
  13 |     await expect(LoginPage.page.getByText('Reset Password')).toBeVisible();
  14 | });
  15 | test('should reset password successfully', async ({ LoginPage, testdata }) => {
  16 |     await LoginPage.navigate(testdata.adminUrl);
  17 |     await LoginPage.login(testdata.admin.username, testdata.resetPassword.newPassword);
  18 |     await expect(LoginPage.page.getByText(testdata.admin.username)).toBeVisible();
  19 | });
  20 | test('should show error message for required fields', async ({ LoginPage, testdata }) => {
  21 |     await LoginPage.navigate(testdata.adminUrl);
  22 |     await LoginPage.forgotPassword(testdata.forgotPassword.email);
  23 |     await LoginPage.resetPassword('', '');
  24 |     await expect(LoginPage.page.getByText('New password is required')).toBeVisible();
  25 |     await expect(LoginPage.page.getByText('Confirm password is required')).toBeVisible();
  26 | });
  27 | test('should show error message for invalid email', async ({ LoginPage, testdata }) => {
  28 |     await LoginPage.navigate(testdata.adminUrl);
  29 |     await LoginPage.forgotPassword('invalidemail');
  30 |     await expect(LoginPage.page.getByText('Invalid email address')).toBeVisible();
  31 | });
  32 | test('back button should navigate to login page', async ({ LoginPage, testdata }) => {
  33 |     await LoginPage.navigate(testdata.adminUrl);
  34 |     await LoginPage.forgotPassword(testdata.forgotPassword.email);
  35 |     await LoginPage.backToLogin();
  36 |     await expect(LoginPage.page.getByText('Sign in')).toBeVisible();
  37 | });
  38 | });
```