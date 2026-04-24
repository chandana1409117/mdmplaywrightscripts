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
        - generic [ref=e47]: Practices
        - img [ref=e48]
      - link "Patients" [ref=e51] [cursor=pointer]:
        - /url: /patients-list
        - img [ref=e52]
        - generic [ref=e55]: Patients
        - img [ref=e56]
      - button "Files" [ref=e60] [cursor=pointer]:
        - generic [ref=e61]:
          - img [ref=e62]
          - generic [ref=e64]: Files
        - img [ref=e65]
      - button "Fax" [ref=e69] [cursor=pointer]:
        - generic [ref=e70]:
          - img [ref=e71]
          - generic [ref=e75]: Fax
        - img [ref=e76]
      - link "Letters" [ref=e79] [cursor=pointer]:
        - /url: /letters
        - img [ref=e80]
        - generic [ref=e85]: Letters
        - img [ref=e86]
      - link "Reports" [ref=e89] [cursor=pointer]:
        - /url: /reports
        - img [ref=e90]
        - generic [ref=e96]: Reports
        - img [ref=e97]
      - button "Admin" [ref=e101] [cursor=pointer]:
        - generic [ref=e102]:
          - img [ref=e103]
          - generic [ref=e106]: Admin
        - img [ref=e107]
    - generic [ref=e109]:
      - heading "Quick Access" [level=3] [ref=e111]
      - generic [ref=e112]:
        - link "DMS" [ref=e113] [cursor=pointer]:
          - /url: /dms
          - img [ref=e114]
          - generic [ref=e116]: DMS
        - link "Patients" [ref=e117] [cursor=pointer]:
          - /url: /patients-list
          - img [ref=e118]
          - generic [ref=e123]: Patients
  - generic [ref=e124]:
    - generic [ref=e126]:
      - heading "Dashboard" [level=1] [ref=e131]
      - generic [ref=e132]:
        - generic [ref=e136]:
          - log [ref=e138]
          - generic [ref=e139]:
            - generic [ref=e140]:
              - generic [ref=e141]: Select Practice
              - combobox [ref=e143]
            - img [ref=e146] [cursor=pointer]
        - generic [ref=e150]:
          - img [ref=e151]
          - textbox "Please select a practice first..." [disabled] [ref=e155]
        - button "CD Chandana Duddukuri SUPER ADMIN" [ref=e157] [cursor=pointer]:
          - generic [ref=e159]: CD
          - generic [ref=e160]:
            - paragraph [ref=e161]: Chandana Duddukuri
            - paragraph [ref=e162]: SUPER ADMIN
          - img [ref=e164]
    - main [ref=e167]:
      - generic [ref=e170]:
        - generic [ref=e175]:
          - log [ref=e177]
          - generic [ref=e178]:
            - generic [ref=e179]:
              - generic ".DEMO" [ref=e181]
              - combobox [ref=e184]
            - img [ref=e187] [cursor=pointer]
        - generic [ref=e189]:
          - generic [ref=e190]:
            - generic [ref=e191]:
              - generic [ref=e193]:
                - heading "Internal Status Ageing" [level=3] [ref=e194]
                - paragraph [ref=e195]: "Showing data for: .DEMO"
              - paragraph [ref=e198]: No data available
            - generic [ref=e199]:
              - generic [ref=e201]:
                - heading "ARB & Patient Collection Ageing" [level=3] [ref=e202]
                - paragraph [ref=e203]: "Showing data for: .DEMO"
              - paragraph [ref=e206]: No data available
            - generic [ref=e207]:
              - generic [ref=e209]:
                - heading "Patients Created" [level=3] [ref=e210]
                - paragraph [ref=e211]: "Showing data for: .DEMO"
              - application "Patients Created bar chart" [ref=e213]:
                - generic [ref=e215]:
                  - generic [ref=e228]:
                    - generic [ref=e229]: Apr-26
                    - generic [ref=e230]: Mar-26
                    - generic [ref=e231]: Feb-26
                    - text: (Month)
                  - generic [ref=e232]:
                    - generic [ref=e233]: "0"
                    - generic [ref=e234]: "1"
                    - text: No of Patients
                  - 'generic "Patients Created - Apr-26: 1" [ref=e236]'
                  - generic:
                    - 'generic "Patients Created - Mar-26: 0"'
                  - generic:
                    - 'generic "Patients Created - Feb-26: 0"'
                  - generic [ref=e237]: "1"
                  - generic [ref=e238]: "0"
                  - generic [ref=e239]: "0"
          - generic [ref=e240]:
            - generic [ref=e245]:
              - log [ref=e247]
              - generic [ref=e248]:
                - generic [ref=e249]:
                  - generic "Chandana Duddukuri" [ref=e251]
                  - combobox [ref=e254]
                - img [ref=e257] [cursor=pointer]
            - generic [ref=e259]:
              - generic [ref=e261]:
                - heading "App Status Count" [level=3] [ref=e262]
                - paragraph [ref=e263]: "Showing data for: Chandana Duddukuri"
              - application "App Status Count bar chart" [ref=e265]:
                - generic [ref=e267]:
                  - generic [ref=e285]:
                    - generic [ref=e286]: Today
                    - generic [ref=e287]: Last 7
                    - generic [ref=e288]: Last 30
                    - text: (days)
                  - generic [ref=e289]:
                    - generic [ref=e290]: "0"
                    - generic [ref=e291]: "1"
                    - generic [ref=e292]: "2"
                    - generic [ref=e293]: "3"
                    - text: App Status Count
                  - 'generic "App Status Count - Today: 1" [ref=e295]'
                  - 'generic "App Status Count - Last 7: 1" [ref=e297]'
                  - 'generic "App Status Count - Last 30: 3" [ref=e299]'
                  - generic [ref=e300]: "1"
                  - generic [ref=e301]: "1"
                  - generic [ref=e302]: "3"
            - generic [ref=e303]:
              - generic [ref=e305]:
                - heading "DMS Pages Uploaded" [level=3] [ref=e306]
                - paragraph [ref=e307]: "Showing data for: Chandana Duddukuri"
              - application "DMS Pages Uploaded bar chart" [ref=e309]:
                - generic [ref=e311]:
                  - generic [ref=e322]:
                    - generic [ref=e323]: Today
                    - generic [ref=e324]: Last 7
                    - generic [ref=e325]: Last 30
                    - text: (days)
                  - generic [ref=e326]:
                    - generic [ref=e327]: "0"
                    - generic [ref=e328]: "200"
                    - generic [ref=e329]: "400"
                    - generic [ref=e330]: "600"
                    - generic [ref=e331]: "800"
                    - generic [ref=e332]: 1K
                    - generic [ref=e333]: 1K
                    - generic [ref=e334]: 1K
                    - generic [ref=e335]: 1K
                    - text: No of DMS Pages Uploaded
                  - 'generic "DMS Pages Uploaded - Today: 12" [ref=e337]'
                  - 'generic "DMS Pages Uploaded - Last 7: 57" [ref=e339]'
                  - 'generic "DMS Pages Uploaded - Last 30: 1586" [ref=e341]'
                  - generic [ref=e342]: "12"
                  - generic [ref=e343]: "57"
                  - generic [ref=e344]: 1,586
            - generic [ref=e345]:
              - generic [ref=e347]:
                - heading "Patients Created" [level=3] [ref=e348]
                - paragraph [ref=e349]: "Showing data for: Chandana Duddukuri"
              - application "Patients Created bar chart" [ref=e351]:
                - generic [ref=e353]:
                  - generic [ref=e366]:
                    - generic [ref=e367]: Today
                    - generic [ref=e368]: Last 7
                    - generic [ref=e369]: Last 30
                    - text: (days)
                  - generic [ref=e370]:
                    - generic [ref=e371]: "0"
                    - generic [ref=e372]: "1"
                    - text: No of Patients Created
                  - generic:
                    - 'generic "Patients Created - Today: 0"'
                  - 'generic "Patients Created - Last 7: 1" [ref=e374]'
                  - 'generic "Patients Created - Last 30: 1" [ref=e376]'
                  - generic [ref=e377]: "0"
                  - generic [ref=e378]: "1"
                  - generic [ref=e379]: "1"
          - generic [ref=e380]:
            - generic [ref=e385]:
              - log [ref=e387]
              - generic [ref=e388]:
                - generic [ref=e389]:
                  - generic "--- (Lawyer) [-NA-]" [ref=e391]
                  - combobox [ref=e394]
                - img [ref=e397] [cursor=pointer]
            - generic [ref=e399]:
              - generic [ref=e401]:
                - heading "Download Status" [level=3] [ref=e402]
                - paragraph [ref=e403]: "Showing data for: --- (Lawyer) [-NA-]"
              - paragraph [ref=e408]: Loading data...
            - generic [ref=e409]:
              - generic [ref=e411]:
                - heading "Rejected & Need More Info" [level=3] [ref=e412]
                - paragraph [ref=e413]: "Showing data for: --- (Lawyer) [-NA-]"
              - paragraph [ref=e418]: Loading data...
            - generic [ref=e419]:
              - generic [ref=e421]:
                - heading "Processed Ageing" [level=3] [ref=e422]
                - paragraph [ref=e423]: "Showing data for: --- (Lawyer) [-NA-]"
              - paragraph [ref=e428]: Loading data...
          - generic [ref=e429]:
            - generic [ref=e434]:
              - log [ref=e436]
              - generic [ref=e437]:
                - generic [ref=e438]:
                  - generic "Alex Wicker" [ref=e440]
                  - combobox [ref=e443]
                - img [ref=e446] [cursor=pointer]
            - generic [ref=e448]:
              - generic [ref=e450]:
                - heading "Case Type Distribution" [level=3] [ref=e451]
                - paragraph [ref=e452]: "Showing data for: Alex Wicker"
              - paragraph [ref=e457]: Loading chart data...
            - generic [ref=e458]:
              - generic [ref=e460]:
                - heading "Top 5 Insurances" [level=3] [ref=e461]
                - paragraph [ref=e462]: "Showing data for: Alex Wicker"
              - paragraph [ref=e467]: Loading chart data...
            - generic [ref=e468]:
              - generic [ref=e470]:
                - heading "Document Aging by Status" [level=3] [ref=e471]
                - paragraph [ref=e472]: "Showing data for: Alex Wicker"
              - paragraph [ref=e474]: Loading data...
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