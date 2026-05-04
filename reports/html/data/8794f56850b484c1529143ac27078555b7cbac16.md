# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\Practice\Practice.spec.js >> Practice Management Flow >> Create Practice
- Location: Scripts\Tests\Practice\Practice.spec.js:5:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /practices/
Received string:  "https://arbmdmmanage-ui.azurewebsites.net/add-practice"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    9 × unexpected value "https://arbmdmmanage-ui.azurewebsites.net/add-practice"

```

# Page snapshot

```yaml
- generic [ref=e2]:
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
        - generic [ref=e120]:
          - button [ref=e121] [cursor=pointer]:
            - img [ref=e122]
          - heading "Create Practice" [level=1] [ref=e125]
        - generic [ref=e126]:
          - generic [ref=e130]:
            - log [ref=e132]
            - generic [ref=e133]:
              - generic [ref=e134]:
                - generic [ref=e135]: Select Practice
                - combobox [ref=e137]
              - img [ref=e140] [cursor=pointer]
          - generic [ref=e144]:
            - img [ref=e145]
            - textbox "Please select a practice first..." [disabled] [ref=e149]
          - button "CD Chandana Duddukuri SUPER ADMIN" [ref=e151] [cursor=pointer]:
            - generic [ref=e153]: CD
            - generic [ref=e154]:
              - paragraph [ref=e155]: Chandana Duddukuri
              - paragraph [ref=e156]: SUPER ADMIN
            - img [ref=e158]
      - main [ref=e161]:
        - generic [ref=e166]:
          - generic [ref=e167]:
            - generic [ref=e168]:
              - generic [ref=e169]:
                - img [ref=e171]
                - heading "Practice Details" [level=3] [ref=e175]
              - generic [ref=e176]:
                - generic [ref=e177]:
                  - generic [ref=e178]:
                    - generic [ref=e179]: Practice ID *
                    - textbox [ref=e180]: IMG
                  - generic [ref=e181]:
                    - generic [ref=e182]: Practice Name *
                    - textbox [ref=e183]: IMAGE HOSPITALS
                  - generic [ref=e184]:
                    - generic [ref=e185]: Practice Code *
                    - textbox [ref=e186]: IMG
                  - generic [ref=e187]:
                    - generic [ref=e188]: Doctor Name *
                    - textbox [ref=e189]: Dr. Jane Smith
                - generic [ref=e190]:
                  - generic [ref=e191]:
                    - generic [ref=e192]: Email
                    - textbox [ref=e193]
                  - generic [ref=e194]:
                    - generic [ref=e195]: Phone
                    - textbox [ref=e196]: "5551234567"
                  - generic [ref=e197]:
                    - generic [ref=e198]: Fax
                    - textbox [ref=e199]: 555-123-4568
            - generic [ref=e200]:
              - generic [ref=e201]:
                - img [ref=e203]
                - heading "Address Information" [level=3] [ref=e206]
              - generic [ref=e207]:
                - generic [ref=e208]:
                  - generic [ref=e209]:
                    - generic [ref=e210]: Address Line 1
                    - textbox [ref=e211]: 123 Medical Drive
                  - generic [ref=e212]:
                    - generic [ref=e213]: Address Line 2
                    - textbox [ref=e214]: Suite 100
                - generic [ref=e215]:
                  - generic [ref=e216]:
                    - generic [ref=e217]: City
                    - textbox [ref=e218]: New York
                  - generic [ref=e219]:
                    - generic [ref=e220]: State
                    - textbox [ref=e221]: NY
                  - generic [ref=e222]:
                    - generic [ref=e223]: ZIP Code
                    - textbox [ref=e224]: "10001"
            - generic [ref=e225]:
              - generic [ref=e226]:
                - img [ref=e228]
                - heading "Additional Information" [level=3] [ref=e231]
              - generic [ref=e232]:
                - generic [ref=e233]:
                  - generic [ref=e234]: Tax ID Number (TIN)
                  - textbox [ref=e235]: 12-3456789
                - generic [ref=e236]:
                  - generic [ref=e237]: Status
                  - generic [ref=e241]:
                    - log [ref=e243]
                    - generic [ref=e244]:
                      - generic [ref=e245]:
                        - generic [ref=e246]: Active
                        - combobox [ref=e248]
                      - img [ref=e251] [cursor=pointer]
          - generic [ref=e254]:
            - button "Cancel" [ref=e255] [cursor=pointer]
            - button "Save" [ref=e256] [cursor=pointer]:
              - img [ref=e257]
              - text: Save
  - status [ref=e266]: Practice ID 'IMG' already exists.
```

# Test source

```ts
  1  | import { test, expect } from '../../Fixtures/baseTest';
  2  | 
  3  | test.describe('Practice Management Flow', () => {
  4  | 
  5  |     test('Create Practice', async ({ loginPage, practicePage, testData }) => {
  6  | 
  7  |         await loginPage.navigate(testData.adminUrl);
  8  |         await loginPage.login(testData.admin.username, testData.admin.password);
  9  | 
  10 |         await practicePage.navigateToPractices();
  11 |         await practicePage.clickCreate();
  12 | 
  13 |         await practicePage.createPractice(testData.practice);
  14 | 
  15 |         // Optional validation
> 16 |         await expect(practicePage.page).toHaveURL(/practices/);
     |                                         ^ Error: expect(page).toHaveURL(expected) failed
  17 |     });
  18 | 
  19 | 
  20 |     test('Edit & View Practice', async ({ loginPage, practicePage, testData }) => {
  21 | 
  22 |         await loginPage.navigate(testData.adminUrl);
  23 |         await loginPage.login(testData.admin.username, testData.admin.password);
  24 | 
  25 |         await practicePage.navigateToPractices();
  26 | 
  27 |         await practicePage.editPractice(testData.practice.practiceName);
  28 | 
  29 |         await practicePage.viewPractice();
  30 |     });
  31 | 
  32 | });
```