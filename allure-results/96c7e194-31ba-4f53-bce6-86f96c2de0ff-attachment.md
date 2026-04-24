# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\Login\Login.spec.js >> Authentication Tests >> should logout successfully
- Location: Scripts\Tests\Login\Login.spec.js:25:9

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
    - paragraph [ref=e51]:
      - img [ref=e52]
      - generic [ref=e54]: Protected by industry-standard encryption
```

# Test source

```ts
  1  | import { test, expect } from '../../Fixtures/baseTest';
  2  | 
  3  | test.describe.parallel('Authentication Tests', () => {
  4  |     test('should login successfully', async ({LoginPage, testdata}) => {
  5  |         await LoginPage.navigate(testdata.adminUrl);
  6  |         await LoginPage.login(testdata.admin.username, testdata.admin.password);
  7  |         await expect(LoginPage.page.getByText(testdata.admin.displayName)).toBeVisible();
  8  |     });
  9  |     test('Invalid credentials', async ({LoginPage, testdata}) => {
  10 |         await LoginPage.navigate(testdata.adminUrl);
  11 |         await LoginPage.login(testdata.admin.username, 'invalidpassword');
  12 |         await expect(LoginPage.page.getByText('Invalid credentials')).toBeVisible();
  13 |     });
  14 |     test('should show error message for required fields', async ({LoginPage, testdata}) => {
  15 |         await LoginPage.navigate(testdata.adminUrl);
  16 |         await LoginPage.login('', '');
  17 |         await expect(LoginPage.page.getByText('Username is required')).toBeVisible();
  18 |         await expect(LoginPage.page.getByText('Password is required')).toBeVisible();
  19 |     });
  20 |     test('User not found', async ({LoginPage, testdata}) => {
  21 |         await LoginPage.navigate(testdata.adminUrl);
  22 |         await LoginPage.login('invalidusername', testdata.admin.password);
  23 |         await expect(LoginPage.page.getByText('User not found')).toBeVisible();
  24 |     });
  25 |     test('should logout successfully', async ({LoginPage, testdata}) => {
  26 |         await LoginPage.navigate(testdata.adminUrl);
  27 |         await LoginPage.login(testdata.admin.username, testdata.admin.password);
  28 |         await LoginPage.logout(testdata.admin.displayName);
> 29 |         await expect(LoginPage.page.getByText('Sign in')).toBeVisible();
     |                                                           ^ Error: expect(locator).toBeVisible() failed
  30 |     });
  31 |     
  32 | });
```