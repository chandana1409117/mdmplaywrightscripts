# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\Patient\PatientCrud.spec.js >> Patient Management >> Create Patient
- Location: Scripts\Tests\Patient\PatientCrud.spec.js:21:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Patient saved successfully')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Patient saved successfully')

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
      - heading "Patient Management" [level=1] [ref=e122]
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
        - generic [ref=e162]:
          - button "Create" [ref=e165] [cursor=pointer]:
            - img [ref=e166]
            - generic [ref=e169]: Create
          - generic [ref=e171]:
            - generic [ref=e174]:
              - log [ref=e176]
              - generic [ref=e177]:
                - generic [ref=e178]:
                  - generic [ref=e179]: Select practice...
                  - combobox [ref=e181]
                - img [ref=e184] [cursor=pointer]
            - generic [ref=e188]:
              - log [ref=e190]
              - generic [ref=e191]:
                - generic [ref=e192]:
                  - generic [ref=e193]: Select insurance...
                  - combobox [ref=e195]
                - img [ref=e198] [cursor=pointer]
            - textbox "Search patient name" [disabled] [ref=e201]
            - generic [ref=e202]:
              - button "Clear" [ref=e203] [cursor=pointer]
              - button "Submit" [disabled] [ref=e204]
        - table [ref=e211] [cursor=pointer]:
          - generic [ref=e213]: Please select a practice
```

# Test source

```ts
  1  | import { test, expect } from '../../Fixtures/baseTest';
  2  | 
  3  | test.describe('Patient Management', () => {
  4  |     test.describe.configure({ mode: 'serial' });
  5  | 
  6  |     test.beforeEach(async ({ loginPage, testData }) => {
  7  |         await loginPage.navigate(testData.adminUrl);
  8  |         await loginPage.login(testData.admin.username, testData.admin.password);
  9  |     });
  10 | 
  11 |     test('Create Patient', async ({ patientPage, testData }) => {
  12 |         const patient = testData.patient[0];
  13 |         await patientPage.navigateToPatients();
  14 |         await patientPage.createPatient(patient);
  15 | 
  16 |         await expect(patientPage.page.getByText('Patient saved successfully')).toBeVisible();
  17 |     });
  18 | 
  19 |     test('Edit Patient', async ({ patientPage, testData }) => {
  20 |         const base = testData.patient[0];
  21 |         await patientPage.navigateToPatients();
  22 |         await patientPage.editPatient({
  23 |             ...base,
  24 |             firstName: 'LiamUpdated',
  25 |         });
  26 | 
  27 |         await expect(patientPage.page.getByText('Patient updated successfully')).toBeVisible();
  28 |     });
  29 | 
  30 |     test('View Patient', async ({ patientPage, testData }) => {
> 31 |         await patientPage.navigateToPatients();
     |                                                                                ^ Error: expect(locator).toBeVisible() failed
  32 |         await patientPage.viewPatient({
  33 |             ...testData.patient[0],
  34 |             firstName: 'LiamUpdated',
  35 |         });
  36 |     });
  37 | });
  38 | 
```