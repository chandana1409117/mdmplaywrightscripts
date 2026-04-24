# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\User\UserManagement.spec.js >> User Management >> Create User
- Location: Scripts\Tests\User\UserManagement.spec.js:20:9

# Error details

```
TypeError: _UserPage.UserPage is not a constructor
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
  - generic [ref=e20]:
    - img "MD Manage" [ref=e23]
    - generic [ref=e24]:
      - heading "Welcome Back" [level=1] [ref=e25]
      - paragraph [ref=e26]: Sign in to your account
    - generic [ref=e27]:
      - generic [ref=e28]:
        - img [ref=e30]
        - heading "Login Details" [level=3] [ref=e33]
      - generic [ref=e34]:
        - generic [ref=e35]:
          - generic [ref=e36]:
            - generic [ref=e37]: Username / Email *
            - textbox [ref=e38]: chandanad
          - generic [ref=e39]:
            - generic [ref=e40]: Password *
            - generic [ref=e41]:
              - textbox [ref=e42]: Test@123
              - button [ref=e43] [cursor=pointer]:
                - img [ref=e44]
        - button "Forgot Password?" [ref=e50] [cursor=pointer]
        - button "Sign In" [active] [ref=e51] [cursor=pointer]:
          - generic [ref=e52]:
            - generic [ref=e53]: Sign In
            - img [ref=e54]
    - paragraph [ref=e57]:
      - img [ref=e58]
      - generic [ref=e60]: Protected by industry-standard encryption
```

# Test source

```ts
  1  | import { test as base } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { UserPage } from '../pages/UserPage';
  4  | import { loadTestData } from '../Utils/dataLoader';
  5  | import { MailSlurp } from 'mailslurp-client';
  6  | 
  7  | import dotenv from 'dotenv';
  8  | 
  9  | dotenv.config();
  10 | 
  11 | export const test = base.extend({
  12 | 
  13 |     // ✅ Login Page Fixture
  14 |     loginPage: async ({ page }, use) => {
  15 |         await use(new LoginPage(page));
  16 |     },
  17 | 
  18 |     // ✅ Users Page Fixture (NEW)
  19 |     usersPage: async ({ page }, use) => {
> 20 |         await use(new UserPage(page));
     |                   ^ TypeError: _UserPage.UserPage is not a constructor
  21 |     },
  22 | 
  23 |     mailSlurp: async ({}, use) => {
  24 |         const mailslurp = new MailSlurp({
  25 |             apiKey: process.env.MAILSLURP_API_KEY
  26 |         });
  27 |         await use(mailslurp);
  28 |     },
  29 | 
  30 |     inbox: async ({ mailSlurp }, use) => {
  31 |         const inbox = await mailSlurp.createInbox();
  32 |         await use(inbox);
  33 |     },
  34 | 
  35 |     // ✅ Test Data Fixture
  36 |     testData: async ({}, use) => {
  37 |         const data = loadTestData();
  38 |         await use(data);
  39 |     },
  40 | 
  41 | });
  42 | 
  43 | export const expect = test.expect;
```