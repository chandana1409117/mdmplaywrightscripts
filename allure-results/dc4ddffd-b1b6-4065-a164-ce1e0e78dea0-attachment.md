# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\Patient\PatientCrud.spec.js >> Patient Management >> Edit Patient
- Location: Scripts\Tests\Patient\PatientCrud.spec.js:17:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Edit' }).first()

```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export class PatientPage {
  4  |     constructor(page) {
  5  |         this.page = page;
  6  | 
  7  |         this.patientsMenu = page.getByRole('navigation').getByRole('link', { name: 'Patients' }).first();
  8  |         this.createBtn = page.getByRole('button', { name: 'Create' });
  9  |         this.saveBtn = page.getByRole('button', { name: 'Save' });
  10 | 
  11 |         this.editBtn = page.getByRole('button', { name: 'Edit' });
  12 |         this.viewBtn = page.getByRole('button', { name: 'View' });
  13 | 
  14 |         // Basic fields
  15 |         this.patientId = page.locator('input[name="patientIdSuffix"]');
  16 |         this.firstName = page.locator('input[name="firstName"]');
  17 |         this.lastName = page.locator('input[name="lastName"]');
  18 |         this.dob = page.getByRole('textbox', { name: 'MM/DD/YYYY' }).first();
  19 |         this.ssn = page.locator('input[name="ssn"]');
  20 |         this.address = page.locator('input[name="address"]');
  21 |         this.city = page.locator('input[name="city"]');
  22 |         this.state = page.locator('input[name="state"]');
  23 |         this.zip = page.locator('input[name="zip"]');
  24 |         this.phone = page.locator('input[name="phone"]');
  25 |     }
  26 | 
  27 |     async navigateToPatients() {
  28 |         await this.patientsMenu.click();
  29 |     }
  30 | 
  31 |     async selectDropdownByIndex(index, value) {
  32 |         const dropdown = this.page.locator('.select__control').nth(index + 1);
  33 |         await dropdown.click();
  34 |         await this.page.getByRole('option', { name: value }).click();
  35 |     }
  36 | 
  37 |     async createPatient(testData) {
  38 |         await this.createBtn.click();
  39 | 
  40 |         // Practice
  41 |         await this.selectDropdownByIndex(0, testData.practice);
  42 | 
  43 |         // Basic details
  44 |         await this.patientId.fill(testData.patientIdSuffix);
  45 |         await this.firstName.fill(testData.firstName);
  46 |         await this.lastName.fill(testData.lastName);
  47 |         await this.dob.fill(testData.dob);
  48 |         await this.page.getByRole('radio', { name: testData.gender }).check();
  49 | 
  50 |         await this.ssn.fill(testData.ssn);
  51 |         await this.address.fill(testData.address);
  52 |         await this.city.fill(testData.city);
  53 |         await this.state.fill(testData.state);
  54 |         await this.zip.fill(testData.zip);
  55 |         await this.phone.fill(testData.phone);
  56 | 
  57 |         // Primary Insurance
  58 |         await this.selectDropdownByIndex(1, testData.primaryInsurance.name);
  59 | 
  60 |         await this.page.fill('input[name="primaryInsurance.claimNumber"]', testData.primaryInsurance.claimNumber);
  61 |         await this.page.fill('input[name="primaryInsurance.policyNumber"]', testData.primaryInsurance.policyNumber);
  62 |         await this.page.getByRole('textbox', { name: 'MM/DD/YYYY' }).nth(2).fill(testData.primaryInsurance.doa);
  63 | 
  64 |         // Secondary Insurance (optional)
  65 |         if (testData.secondaryInsurance?.name) {
  66 |             await this.selectDropdownByIndex(2, testData.secondaryInsurance.name);
  67 | 
  68 |             await this.page.fill('input[name="secondaryInsurance.claimNumber"]', testData.secondaryInsurance.claimNumber);
  69 |             await this.page.fill('input[name="secondaryInsurance.policyNumber"]', testData.secondaryInsurance.policyNumber);
  70 |         }
  71 | 
  72 |         await this.saveBtn.click();
  73 |     }
  74 | 
  75 |     async editPatient(testData) {
> 76 |         await this.editBtn.first().click();
     |                                    ^ Error: locator.click: Target page, context or browser has been closed
  77 | 
  78 |         await this.firstName.fill(testData.firstName);  
  79 |         await this.lastName.fill(testData.lastName);
  80 |         await this.ssn.fill(testData.ssn);
  81 | 
  82 |         await this.saveBtn.click();
  83 |     }
  84 | 
  85 |     async viewPatient(testData) {
  86 |         await this.viewBtn.first().click();
  87 | 
  88 |         await expect(this.page.getByText(testData.firstName)).toBeVisible();
  89 |         await expect(this.page.getByText(testData.lastName)).toBeVisible();
  90 |     }
  91 | }
  92 | 
  93 | export default PatientPage;
```