# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\Patient\AssignDOS.spec.js >> Assign DOS flow
- Location: Scripts\Tests\Patient\AssignDOS.spec.js:6:5

# Error details

```
ReferenceError: getRandomPatient is not defined
```

# Test source

```ts
  1  | import { test } from '../../Fixtures/baseTest';
  2  | let createdPatient;
  3  | test.beforeAll(async ({ testData }) => {
> 4  |     createdPatient = getRandomPatient(testData.patient);
     |     ^ ReferenceError: getRandomPatient is not defined
  5  | });
  6  | test('Assign DOS flow', async ({ assignDOSPage }) => {
  7  | 
  8  |   const patient = createdPatient;   // your existing function
  9  |   const hospital = createdPatient.practice;  // your existing data
  10 | 
  11 |   await assignDOSPage.navigateToPatients();
  12 |   await assignDOSPage.selectPractice(hospital);
  13 |   await assignDOSPage.searchPatient(createdPatient.fullName);
  14 |   await assignDOSPage.selectPatient(createdPatient.primaryInsurance.claimNumber);
  15 |   await assignDOSPage.clickAssign();
  16 |   await assignDOSPage.selectStatus(testData.assignDOS.status);
  17 |   await assignDOSPage.selectDropdown('Firm Attorney', testData.assignDOS.attorney);
  18 |   await assignDOSPage.selectDropdown('Case Type', testData.assignDOS.caseType);
  19 |   await assignDOSPage.fillForm(testData.assignDOS);
  20 |   await assignDOSPage.selectDecision(testData.assignDOS.decision);
  21 |   await assignDOSPage.submit();
  22 | 
  23 | });
```