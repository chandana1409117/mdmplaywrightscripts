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
                    - generic [ref=e222]: "2"
                    - generic [ref=e224]: "3"
                    - generic [ref=e226]: "4"
                    - generic [ref=e227]: No of Patients
                  - 'generic "Patients Created - Apr-26: 4" [ref=e229]'
                  - generic:
                    - 'generic "Patients Created - Mar-26: 0"'
                  - generic:
                    - 'generic "Patients Created - Feb-26: 0"'
                  - generic [ref=e231]: "4"
                  - generic [ref=e233]: "0"
                  - generic [ref=e235]: "0"
          - generic [ref=e236]:
            - generic [ref=e241]:
              - log [ref=e243]
              - generic [ref=e244]:
                - generic [ref=e245]:
                  - generic "Chandana Duddukuri" [ref=e247]
                  - combobox [ref=e250]
                - img [ref=e253] [cursor=pointer]
            - generic [ref=e255]:
              - generic [ref=e257]:
                - heading "App Status Count" [level=3] [ref=e258]
                - paragraph [ref=e259]: "Showing data for: Chandana Duddukuri"
              - application "App Status Count bar chart" [ref=e261]:
                - generic [ref=e263]:
                  - generic [ref=e265]:
                    - generic [ref=e267]: Today
                    - generic [ref=e269]: Last 7
                    - generic [ref=e271]: Last 30
                    - generic [ref=e272]: (days)
                  - generic [ref=e273]:
                    - generic [ref=e275]: "0"
                    - generic [ref=e277]: "1"
                    - generic [ref=e279]: "2"
                    - generic [ref=e280]: App Status Count
                  - generic:
                    - 'generic "App Status Count - Today: 0"'
                  - 'generic "App Status Count - Last 7: 1" [ref=e282]'
                  - 'generic "App Status Count - Last 30: 2" [ref=e284]'
                  - generic [ref=e286]: "0"
                  - generic [ref=e288]: "1"
                  - generic [ref=e290]: "2"
            - generic [ref=e291]:
              - generic [ref=e293]:
                - heading "DMS Pages Uploaded" [level=3] [ref=e294]
                - paragraph [ref=e295]: "Showing data for: Chandana Duddukuri"
              - application "DMS Pages Uploaded bar chart" [ref=e297]:
                - generic [ref=e299]:
                  - generic [ref=e301]:
                    - generic [ref=e303]: Today
                    - generic [ref=e305]: Last 7
                    - generic [ref=e307]: Last 30
                    - generic [ref=e308]: (days)
                  - generic [ref=e309]:
                    - generic [ref=e311]: "0"
                    - generic [ref=e313]: "50"
                    - generic [ref=e315]: "100"
                    - generic [ref=e317]: "150"
                    - generic [ref=e319]: "200"
                    - generic [ref=e321]: "250"
                    - generic [ref=e323]: "300"
                    - generic [ref=e325]: "350"
                    - generic [ref=e327]: "400"
                    - generic [ref=e329]: "450"
                    - generic [ref=e331]: "500"
                    - generic [ref=e333]: "550"
                    - generic [ref=e335]: "600"
                    - generic [ref=e336]: No of DMS Pages Uploaded
                  - generic:
                    - 'generic "DMS Pages Uploaded - Today: 0"'
                  - 'generic "DMS Pages Uploaded - Last 7: 12" [ref=e338]'
                  - 'generic "DMS Pages Uploaded - Last 30: 595" [ref=e340]'
                  - generic [ref=e342]: "0"
                  - generic [ref=e344]: "12"
                  - generic [ref=e346]: "595"
            - generic [ref=e347]:
              - generic [ref=e349]:
                - heading "Patients Created" [level=3] [ref=e350]
                - paragraph [ref=e351]: "Showing data for: Chandana Duddukuri"
              - application "Patients Created bar chart" [ref=e353]:
                - generic [ref=e355]:
                  - generic [ref=e357]:
                    - generic [ref=e359]: Today
                    - generic [ref=e361]: Last 7
                    - generic [ref=e363]: Last 30
                    - generic [ref=e364]: (days)
                  - generic [ref=e365]:
                    - generic [ref=e367]: "0"
                    - generic [ref=e369]: "1"
                    - generic [ref=e371]: "2"
                    - generic [ref=e373]: "3"
                    - generic [ref=e375]: "4"
                    - generic [ref=e377]: "5"
                    - generic [ref=e378]: No of Patients Created
                  - generic:
                    - 'generic "Patients Created - Today: 0"'
                  - 'generic "Patients Created - Last 7: 4" [ref=e380]'
                  - 'generic "Patients Created - Last 30: 5" [ref=e382]'
                  - generic [ref=e384]: "0"
                  - generic [ref=e386]: "4"
                  - generic [ref=e388]: "5"
          - generic [ref=e389]:
            - generic [ref=e394]:
              - log [ref=e396]
              - generic [ref=e397]:
                - generic [ref=e398]:
                  - generic "--- (Lawyer) [-NA-]" [ref=e400]
                  - combobox [ref=e403]
                - img [ref=e406] [cursor=pointer]
            - generic [ref=e408]:
              - generic [ref=e410]:
                - heading "Download Status" [level=3] [ref=e411]
                - paragraph [ref=e412]: "Showing data for: --- (Lawyer) [-NA-]"
              - application "DMS Pages Uploaded bar chart" [ref=e414]:
                - generic [ref=e416]:
                  - generic [ref=e418]:
                    - generic [ref=e420]: 0-10
                    - generic [ref=e422]: 11-20
                    - generic [ref=e424]: 21-30
                    - generic [ref=e426]: Over 30
                    - generic [ref=e427]: (days)
                  - generic [ref=e428]:
                    - generic [ref=e430]: "0"
                    - generic [ref=e432]: "1"
                    - generic [ref=e434]: "2"
                    - generic [ref=e435]: No of DOS
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
                  - 'generic "Files Not Downloaded - Over 30: 2" [ref=e437]'
                  - generic [ref=e438]:
                    - generic [ref=e439]:
                      - generic: Files Downloaded
                    - generic [ref=e441]:
                      - generic: Files Not Downloaded
                  - generic [ref=e444]: "0"
                  - generic [ref=e446]: "0"
                  - generic [ref=e448]: "0"
                  - generic [ref=e450]: "0"
                  - generic [ref=e452]: "0"
                  - generic [ref=e454]: "0"
                  - generic [ref=e456]: "0"
                  - generic [ref=e458]: "2"
            - generic [ref=e459]:
              - generic [ref=e461]:
                - heading "Rejected & Need More Info" [level=3] [ref=e462]
                - paragraph [ref=e463]: "Showing data for: --- (Lawyer) [-NA-]"
              - paragraph [ref=e466]: No data available
            - generic [ref=e467]:
              - generic [ref=e469]:
                - heading "Processed Ageing" [level=3] [ref=e470]
                - paragraph [ref=e471]: "Showing data for: --- (Lawyer) [-NA-]"
              - application "Patients Created bar chart" [ref=e473]:
                - generic [ref=e475]:
                  - generic [ref=e477]:
                    - generic [ref=e479]: 0-30
                    - generic [ref=e481]: 31-60
                    - generic [ref=e483]: 61-90
                    - generic [ref=e485]: Over 90
                    - generic [ref=e486]: (days)
                  - generic [ref=e487]:
                    - generic [ref=e489]: "0"
                    - generic [ref=e491]: "1"
                    - generic [ref=e493]: "2"
                    - generic [ref=e494]: No of DOS
                  - generic:
                    - 'generic "Processed Ageing - 0-30: 0"'
                  - generic:
                    - 'generic "Processed Ageing - 31-60: 0"'
                  - generic:
                    - 'generic "Processed Ageing - 61-90: 0"'
                  - 'generic "Processed Ageing - Over 90: 2" [ref=e496]'
                  - generic [ref=e498]: "0"
                  - generic [ref=e500]: "0"
                  - generic [ref=e502]: "0"
                  - generic [ref=e504]: "2"
          - generic [ref=e505]:
            - generic [ref=e510]:
              - log [ref=e512]
              - generic [ref=e513]:
                - generic [ref=e514]:
                  - generic "Alex Wicker" [ref=e516]
                  - combobox [ref=e519]
                - img [ref=e522] [cursor=pointer]
            - generic [ref=e524]:
              - generic [ref=e526]:
                - heading "Case Type Distribution" [level=3] [ref=e527]
                - paragraph [ref=e528]: "Showing data for: Alex Wicker"
              - application "Case Type Distribution bar chart" [ref=e530]:
                - generic [ref=e532]:
                  - generic [ref=e534]:
                    - generic [ref=e536]: "0"
                    - generic [ref=e538]: "225"
                    - generic [ref=e540]: "450"
                    - generic [ref=e542]: "675"
                    - generic [ref=e544]: "900"
                    - generic [ref=e545]: No Of Open DOS Records
                  - generic [ref=e547]: Case Types
                  - 'generic "count - NYPIP: 893 cases" [ref=e549]'
                  - 'generic "count - NYWC: 230 cases" [ref=e551]'
                  - generic:
                    - 'generic "count - NJPIP: 3 cases"'
                  - generic:
                    - 'generic "count - GO FORWARD AGREEMENT - GEICO NY: 1 cases"'
                  - generic [ref=e553]: "NYPIP: 893"
                  - generic [ref=e555]: "NYWC: 230"
                  - generic [ref=e557]: "NJPIP: 3"
                  - generic [ref=e559]: "GFA-GN: 1"
            - generic [ref=e560]:
              - generic [ref=e562]:
                - heading "Top 5 Insurances" [level=3] [ref=e563]
                - paragraph [ref=e564]: "Showing data for: Alex Wicker"
              - application "Top 5 insurances bar chart" [ref=e566]:
                - generic [ref=e568]:
                  - generic [ref=e571]: Insurance
                  - generic [ref=e572]:
                    - generic [ref=e574]: "0"
                    - generic [ref=e576]: "20"
                    - generic [ref=e578]: "40"
                    - generic [ref=e580]: "60"
                    - generic [ref=e582]: "80"
                    - generic [ref=e584]: "100"
                    - generic [ref=e586]: "120"
                    - generic [ref=e588]: "140"
                    - generic [ref=e590]: "160"
                    - generic [ref=e592]: "180"
                    - generic [ref=e594]: "200"
                    - generic [ref=e596]: "220"
                    - generic [ref=e598]: "240"
                    - generic [ref=e599]: No of Patients
                  - 'generic "value - State Farm Insurance - NYP: 238 items" [ref=e601]'
                  - 'generic "value - Geico - NYP: 233 items" [ref=e603]'
                  - 'generic "value - Progressive (Ny) - NYP: 125 items" [ref=e605]'
                  - 'generic "value - American Transist Insurance - NYP: 115 items" [ref=e607]'
                  - 'generic "value - All State Insurance - NYP: 106 items" [ref=e609]'
                  - generic [ref=e610]:
                    - generic [ref=e612]: "238"
                    - generic [ref=e614]: State Farm Insurance - NYP
                  - generic [ref=e615]:
                    - generic [ref=e617]: "233"
                    - generic [ref=e619]: Geico - NYP
                  - generic [ref=e620]:
                    - generic [ref=e622]: "125"
                    - generic [ref=e624]: Progressive (Ny) - NYP
                  - generic [ref=e625]:
                    - generic [ref=e627]: "115"
                    - generic [ref=e629]: American Transist Insurance - NYP
                  - generic [ref=e630]:
                    - generic [ref=e632]: "106"
                    - generic [ref=e634]: All State Insurance - NYP
            - generic [ref=e635]:
              - generic [ref=e637]:
                - heading "Document Aging by Status" [level=3] [ref=e638]
                - paragraph [ref=e639]: "Showing data for: Alex Wicker"
              - paragraph [ref=e641]: No data available
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