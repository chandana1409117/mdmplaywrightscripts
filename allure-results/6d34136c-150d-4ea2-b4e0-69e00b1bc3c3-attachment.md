# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\Patient\PatientCrud.spec.js >> Patient Management >> Create Patient
- Location: Scripts\Tests\Patient\PatientCrud.spec.js:27:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Patient saved successfully')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Patient saved successfully')

```

# Test source

```ts
  1  | import { test, expect } from '../../Fixtures/baseTest';
  2  | 
  3  | function getRandomPatient(patients) {
  4  |     return patients[Math.floor(Math.random() * patients.length)];
  5  | }
  6  | 
  7  | let createdPatient;
  8  | test.describe('Patient Management', () => {
  9  | 
  10 |     test.describe.configure({ mode: 'serial' });
  11 |     test.beforeAll(async ({ testData }) => {
  12 |         createdPatient = getRandomPatient(testData.patient);
  13 |     });
  14 | 
  15 | 
  16 | 
  17 |     test.beforeEach(async ({ loginPage, testData }) => {
  18 | 
  19 |         await loginPage.navigate(testData.adminUrl);
  20 | 
  21 |         await loginPage.login(testData.admin.username, testData.admin.password);
  22 | 
  23 |     });
  24 | 
  25 | 
  26 | 
  27 |     test('Create Patient', async ({ patientPage, testData }) => {
  28 | 
  29 |         const patient = testData.patient[0];
  30 | 
  31 |         await patientPage.navigateToPatients();
  32 | 
  33 |         await patientPage.createPatient(patient);
  34 | 
  35 | 
  36 | 
> 37 |         await expect(patientPage.page.getByText('Patient saved successfully')).toBeVisible();
     |                                                                                ^ Error: expect(locator).toBeVisible() failed
  38 | 
  39 |     });
  40 | 
  41 | 
  42 | 
  43 |     test('Edit Patient', async ({ patientPage, testData }) => {
  44 | 
  45 |         const base = testData.patient[0];
  46 | 
  47 |         await patientPage.navigateToPatients();
  48 | 
  49 |         await patientPage.editPatient({
  50 | 
  51 |             ...base,
  52 | 
  53 |             firstName: 'LiamUpdated',
  54 | 
  55 |         });
  56 | 
  57 | 
  58 | 
  59 |         await expect(patientPage.page.getByText('Patient updated successfully')).toBeVisible();
  60 | 
  61 |     });
  62 | 
  63 | 
  64 | 
  65 |     test('View Patient', async ({ patientPage, testData }) => {
  66 | 
  67 |         await patientPage.navigateToPatients();
  68 | 
  69 |         await patientPage.viewPatient({
  70 | 
  71 |             ...testData.patient[0],
  72 | 
  73 |             firstName: 'LiamUpdated',
  74 | 
  75 |         });
  76 | 
  77 |     });
  78 | 
  79 | });
  80 | 
  81 | 
```