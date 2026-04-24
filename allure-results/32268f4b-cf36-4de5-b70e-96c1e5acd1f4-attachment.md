# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\Login\ForgotPassword.spec.js >> Forgot Password Tests >> should reset password successfully
- Location: Scripts\Tests\Login\ForgotPassword.spec.js:15:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('chandanad')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('chandanad')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - button "MD Manage" [ref=e8] [cursor=pointer]:
      - img "MD Manage" [ref=e9]
    - navigation [ref=e11]:
      - link "Dashboard" [ref=e13] [cursor=pointer]:
        - /url: /
        - img [ref=e14]
        - generic [ref=e17]: Dashboard
        - img [ref=e18]
      - link "Users" [ref=e21] [cursor=pointer]:
        - /url: /users
        - img [ref=e22]
        - generic [ref=e34]: Users
        - img [ref=e35]
      - link "Practices" [ref=e38] [cursor=pointer]:
        - /url: /practice
        - img [ref=e39]
        - generic [ref=e43]: Practices
        - img [ref=e44]
      - link "Patients" [ref=e47] [cursor=pointer]:
        - /url: /patients-list
        - img [ref=e48]
        - generic [ref=e51]: Patients
        - img [ref=e52]
      - button "Files" [ref=e56] [cursor=pointer]:
        - generic [ref=e57]:
          - img [ref=e58]
          - generic [ref=e60]: Files
        - img [ref=e61]
      - button "Fax" [ref=e65] [cursor=pointer]:
        - generic [ref=e66]:
          - img [ref=e67]
          - generic [ref=e71]: Fax
        - img [ref=e72]
      - link "Letters" [ref=e75] [cursor=pointer]:
        - /url: /letters
        - img [ref=e76]
        - generic [ref=e79]: Letters
        - img [ref=e80]
      - link "Reports" [ref=e83] [cursor=pointer]:
        - /url: /reports
        - img [ref=e84]
        - generic [ref=e87]: Reports
        - img [ref=e88]
      - button "Admin" [ref=e92] [cursor=pointer]:
        - generic [ref=e93]:
          - img [ref=e94]
          - generic [ref=e97]: Admin
        - img [ref=e98]
    - generic [ref=e100]:
      - heading "Quick Access" [level=3] [ref=e102]
      - generic [ref=e103]:
        - link "DMS" [ref=e104] [cursor=pointer]:
          - /url: /dms
          - img [ref=e105]
          - generic [ref=e107]: DMS
        - link "Patients" [ref=e108] [cursor=pointer]:
          - /url: /patients-list
          - img [ref=e109]
          - generic [ref=e114]: Patients
  - generic [ref=e115]:
    - generic [ref=e117]:
      - heading "Dashboard" [level=1] [ref=e122]
      - generic [ref=e123]:
        - generic [ref=e127]:
          - log [ref=e129]
          - generic [ref=e130]:
            - generic [ref=e131]:
              - generic [ref=e132]: Select Practice
              - combobox [ref=e134]
            - img [ref=e137] [cursor=pointer]
        - generic [ref=e141]:
          - img [ref=e142]
          - textbox "Please select a practice first..." [disabled] [ref=e146]
        - button "CD Chandana Duddukuri SUPER ADMIN" [ref=e148] [cursor=pointer]:
          - generic [ref=e150]: CD
          - generic [ref=e151]:
            - paragraph [ref=e152]: Chandana Duddukuri
            - paragraph [ref=e153]: SUPER ADMIN
          - img [ref=e155]
    - main [ref=e158]:
      - heading "Loading..." [level=2] [ref=e162]
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
  12 |     await LoginPage.resetPassword(testdata.resetPassword.newPassword, testdata.resetPassword.confirmPassword);
  13 |     await expect(LoginPage.page.getByText('Reset Password')).toBeVisible();
  14 | });
  15 | test('should reset password successfully', async ({ LoginPage, testdata }) => {
  16 |     await LoginPage.navigate(testdata.adminUrl);
  17 |     await LoginPage.login(testdata.admin.username, testdata.resetPassword.newPassword);
> 18 |     await expect(LoginPage.page.getByText(testdata.admin.username)).toBeVisible();
     |                                                                     ^ Error: expect(locator).toBeVisible() failed
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