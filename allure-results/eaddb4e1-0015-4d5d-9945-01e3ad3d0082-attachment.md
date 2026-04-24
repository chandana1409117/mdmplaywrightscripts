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
      - generic [ref=e161]:
        - generic [ref=e166]:
          - log [ref=e168]
          - generic [ref=e169]:
            - generic [ref=e170]:
              - generic ".DEMO" [ref=e172]
              - combobox [ref=e175]
            - img [ref=e178] [cursor=pointer]
        - generic [ref=e180]:
          - generic [ref=e181]:
            - generic [ref=e182]:
              - generic [ref=e184]:
                - heading "Internal Status Ageing" [level=3] [ref=e185]
                - paragraph [ref=e186]: "Showing data for: .DEMO"
              - paragraph [ref=e189]: No data available
            - generic [ref=e190]:
              - generic [ref=e192]:
                - heading "ARB & Patient Collection Ageing" [level=3] [ref=e193]
                - paragraph [ref=e194]: "Showing data for: .DEMO"
              - paragraph [ref=e197]: No data available
            - generic [ref=e198]:
              - generic [ref=e200]:
                - heading "Patients Created" [level=3] [ref=e201]
                - paragraph [ref=e202]: "Showing data for: .DEMO"
              - application "Patients Created bar chart" [ref=e204]:
                - generic [ref=e206]:
                  - generic [ref=e208]:
                    - generic [ref=e210]: Apr-26
                    - generic [ref=e212]: Mar-26
                    - generic [ref=e214]: Feb-26
                    - generic [ref=e215]: (Month)
                  - generic [ref=e216]:
                    - generic [ref=e218]: "0"
                    - generic [ref=e220]: "1"
                    - generic [ref=e221]: No of Patients
                  - 'generic "Patients Created - Apr-26: 1" [ref=e223]'
                  - generic:
                    - 'generic "Patients Created - Mar-26: 0"'
                  - generic:
                    - 'generic "Patients Created - Feb-26: 0"'
                  - generic [ref=e225]: "1"
                  - generic [ref=e227]: "0"
                  - generic [ref=e229]: "0"
          - generic [ref=e230]:
            - generic [ref=e235]:
              - log [ref=e237]
              - generic [ref=e238]:
                - generic [ref=e239]:
                  - generic "Chandana Duddukuri" [ref=e241]
                  - combobox [ref=e244]
                - img [ref=e247] [cursor=pointer]
            - generic [ref=e249]:
              - generic [ref=e251]:
                - heading "App Status Count" [level=3] [ref=e252]
                - paragraph [ref=e253]: "Showing data for: Chandana Duddukuri"
              - application "App Status Count bar chart" [ref=e255]:
                - generic [ref=e257]:
                  - generic [ref=e259]:
                    - generic [ref=e261]: Today
                    - generic [ref=e263]: Last 7
                    - generic [ref=e265]: Last 30
                    - generic [ref=e266]: (days)
                  - generic [ref=e267]:
                    - generic [ref=e269]: "0"
                    - generic [ref=e271]: "1"
                    - generic [ref=e273]: "2"
                    - generic [ref=e275]: "3"
                    - generic [ref=e276]: App Status Count
                  - 'generic "App Status Count - Today: 1" [ref=e278]'
                  - 'generic "App Status Count - Last 7: 1" [ref=e280]'
                  - 'generic "App Status Count - Last 30: 3" [ref=e282]'
                  - generic [ref=e284]: "1"
                  - generic [ref=e286]: "1"
                  - generic [ref=e288]: "3"
            - generic [ref=e289]:
              - generic [ref=e291]:
                - heading "DMS Pages Uploaded" [level=3] [ref=e292]
                - paragraph [ref=e293]: "Showing data for: Chandana Duddukuri"
              - application "DMS Pages Uploaded bar chart" [ref=e295]:
                - generic [ref=e297]:
                  - generic [ref=e299]:
                    - generic [ref=e301]: Today
                    - generic [ref=e303]: Last 7
                    - generic [ref=e305]: Last 30
                    - generic [ref=e306]: (days)
                  - generic [ref=e307]:
                    - generic [ref=e309]: "0"
                    - generic [ref=e311]: "200"
                    - generic [ref=e313]: "400"
                    - generic [ref=e315]: "600"
                    - generic [ref=e317]: "800"
                    - generic [ref=e319]: 1K
                    - generic [ref=e321]: 1K
                    - generic [ref=e323]: 1K
                    - generic [ref=e325]: 1K
                    - generic [ref=e326]: No of DMS Pages Uploaded
                  - 'generic "DMS Pages Uploaded - Today: 12" [ref=e328]'
                  - 'generic "DMS Pages Uploaded - Last 7: 57" [ref=e330]'
                  - 'generic "DMS Pages Uploaded - Last 30: 1586" [ref=e332]'
                  - generic [ref=e334]: "12"
                  - generic [ref=e336]: "57"
                  - generic [ref=e338]: 1,586
            - generic [ref=e339]:
              - generic [ref=e341]:
                - heading "Patients Created" [level=3] [ref=e342]
                - paragraph [ref=e343]: "Showing data for: Chandana Duddukuri"
              - application "Patients Created bar chart" [ref=e345]:
                - generic [ref=e347]:
                  - generic [ref=e349]:
                    - generic [ref=e351]: Today
                    - generic [ref=e353]: Last 7
                    - generic [ref=e355]: Last 30
                    - generic [ref=e356]: (days)
                  - generic [ref=e357]:
                    - generic [ref=e359]: "0"
                    - generic [ref=e361]: "1"
                    - generic [ref=e362]: No of Patients Created
                  - generic:
                    - 'generic "Patients Created - Today: 0"'
                  - 'generic "Patients Created - Last 7: 1" [ref=e364]'
                  - 'generic "Patients Created - Last 30: 1" [ref=e366]'
                  - generic [ref=e368]: "0"
                  - generic [ref=e370]: "1"
                  - generic [ref=e372]: "1"
          - generic [ref=e373]:
            - generic [ref=e378]:
              - log [ref=e380]
              - generic [ref=e381]:
                - generic [ref=e382]:
                  - generic "--- (Lawyer) [-NA-]" [ref=e384]
                  - combobox [ref=e387]
                - img [ref=e390] [cursor=pointer]
            - generic [ref=e392]:
              - generic [ref=e394]:
                - heading "Download Status" [level=3] [ref=e395]
                - paragraph [ref=e396]: "Showing data for: --- (Lawyer) [-NA-]"
              - application "DMS Pages Uploaded bar chart" [ref=e398]:
                - generic [ref=e400]:
                  - generic [ref=e402]:
                    - generic [ref=e404]: 0-10
                    - generic [ref=e406]: 11-20
                    - generic [ref=e408]: 21-30
                    - generic [ref=e410]: Over 30
                    - generic [ref=e411]: (days)
                  - generic [ref=e412]:
                    - generic [ref=e414]: "0"
                    - generic [ref=e416]: "1"
                    - generic [ref=e418]: "2"
                    - generic [ref=e419]: No of DOS
                  - generic:
                    - 'generic "Files Downloaded - 0-10: 0"'
                  - generic:
                    - 'generic "Files Downloaded - 11-20: 0"'
                  - generic:
                    - 'generic "Files Downloaded - 21-30: 0"'
                  - generic:
                    - 'generic "Files Downloaded - Over 30: 0"'
                  - generic:
                    - 'generic "Files Not Downloaded - 0-10: 0"'
                  - generic:
                    - 'generic "Files Not Downloaded - 11-20: 0"'
                  - generic:
                    - 'generic "Files Not Downloaded - 21-30: 0"'
                  - 'generic "Files Not Downloaded - Over 30: 2" [ref=e421]'
                  - generic [ref=e422]:
                    - generic [ref=e423]:
                      - generic: Files Downloaded
                    - generic [ref=e425]:
                      - generic: Files Not Downloaded
                  - generic [ref=e428]: "0"
                  - generic [ref=e430]: "0"
                  - generic [ref=e432]: "0"
                  - generic [ref=e434]: "0"
                  - generic [ref=e436]: "0"
                  - generic [ref=e438]: "0"
                  - generic [ref=e440]: "0"
                  - generic [ref=e442]: "2"
            - generic [ref=e443]:
              - generic [ref=e445]:
                - heading "Rejected & Need More Info" [level=3] [ref=e446]
                - paragraph [ref=e447]: "Showing data for: --- (Lawyer) [-NA-]"
              - paragraph [ref=e450]: No data available
            - generic [ref=e451]:
              - generic [ref=e453]:
                - heading "Processed Ageing" [level=3] [ref=e454]
                - paragraph [ref=e455]: "Showing data for: --- (Lawyer) [-NA-]"
              - application "Patients Created bar chart" [ref=e457]:
                - generic [ref=e459]:
                  - generic [ref=e461]:
                    - generic [ref=e463]: 0-30
                    - generic [ref=e465]: 31-60
                    - generic [ref=e467]: 61-90
                    - generic [ref=e469]: Over 90
                    - generic [ref=e470]: (days)
                  - generic [ref=e471]:
                    - generic [ref=e473]: "0"
                    - generic [ref=e475]: "1"
                    - generic [ref=e477]: "2"
                    - generic [ref=e478]: No of DOS
                  - generic:
                    - 'generic "Processed Ageing - 0-30: 0"'
                  - generic:
                    - 'generic "Processed Ageing - 31-60: 0"'
                  - generic:
                    - 'generic "Processed Ageing - 61-90: 0"'
                  - 'generic "Processed Ageing - Over 90: 2" [ref=e480]'
                  - generic [ref=e482]: "0"
                  - generic [ref=e484]: "0"
                  - generic [ref=e486]: "0"
                  - generic [ref=e488]: "2"
          - generic [ref=e489]:
            - generic [ref=e494]:
              - log [ref=e496]
              - generic [ref=e497]:
                - generic [ref=e498]:
                  - generic "Alex Wicker" [ref=e500]
                  - combobox [ref=e503]
                - img [ref=e506] [cursor=pointer]
            - generic [ref=e508]:
              - generic [ref=e510]:
                - heading "Case Type Distribution" [level=3] [ref=e511]
                - paragraph [ref=e512]: "Showing data for: Alex Wicker"
              - application "Case Type Distribution bar chart" [ref=e514]:
                - generic [ref=e516]:
                  - generic [ref=e518]:
                    - generic [ref=e520]: "0"
                    - generic [ref=e522]: "225"
                    - generic [ref=e524]: "450"
                    - generic [ref=e526]: "675"
                    - generic [ref=e528]: "900"
                    - generic [ref=e529]: No Of Open DOS Records
                  - generic [ref=e531]: Case Types
                  - 'generic "count - NYPIP: 893 cases" [ref=e533]'
                  - 'generic "count - NYWC: 230 cases" [ref=e535]'
                  - generic:
                    - 'generic "count - NJPIP: 3 cases"'
                  - generic:
                    - 'generic "count - GO FORWARD AGREEMENT - GEICO NY: 1 cases"'
                  - generic [ref=e537]: "NYPIP: 893"
                  - generic [ref=e539]: "NYWC: 230"
                  - generic [ref=e541]: "NJPIP: 3"
                  - generic [ref=e543]: "GFA-GN: 1"
            - generic [ref=e544]:
              - generic [ref=e546]:
                - heading "Top 5 Insurances" [level=3] [ref=e547]
                - paragraph [ref=e548]: "Showing data for: Alex Wicker"
              - application "Top 5 insurances bar chart" [ref=e550]:
                - generic [ref=e552]:
                  - generic [ref=e555]: Insurance
                  - generic [ref=e556]:
                    - generic [ref=e558]: "0"
                    - generic [ref=e560]: "20"
                    - generic [ref=e562]: "40"
                    - generic [ref=e564]: "60"
                    - generic [ref=e566]: "80"
                    - generic [ref=e568]: "100"
                    - generic [ref=e570]: "120"
                    - generic [ref=e572]: "140"
                    - generic [ref=e574]: "160"
                    - generic [ref=e576]: "180"
                    - generic [ref=e578]: "200"
                    - generic [ref=e580]: "220"
                    - generic [ref=e582]: "240"
                    - generic [ref=e583]: No of Patients
                  - 'generic "value - State Farm Insurance - NYP: 238 items" [ref=e585]'
                  - 'generic "value - Geico - NYP: 233 items" [ref=e587]'
                  - 'generic "value - Progressive (Ny) - NYP: 125 items" [ref=e589]'
                  - 'generic "value - American Transist Insurance - NYP: 115 items" [ref=e591]'
                  - 'generic "value - All State Insurance - NYP: 106 items" [ref=e593]'
                  - generic [ref=e594]:
                    - generic [ref=e596]: "238"
                    - generic [ref=e598]: State Farm Insurance - NYP
                  - generic [ref=e599]:
                    - generic [ref=e601]: "233"
                    - generic [ref=e603]: Geico - NYP
                  - generic [ref=e604]:
                    - generic [ref=e606]: "125"
                    - generic [ref=e608]: Progressive (Ny) - NYP
                  - generic [ref=e609]:
                    - generic [ref=e611]: "115"
                    - generic [ref=e613]: American Transist Insurance - NYP
                  - generic [ref=e614]:
                    - generic [ref=e616]: "106"
                    - generic [ref=e618]: All State Insurance - NYP
            - generic [ref=e619]:
              - generic [ref=e621]:
                - heading "Document Aging by Status" [level=3] [ref=e622]
                - paragraph [ref=e623]: "Showing data for: Alex Wicker"
              - paragraph [ref=e625]: No data available
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