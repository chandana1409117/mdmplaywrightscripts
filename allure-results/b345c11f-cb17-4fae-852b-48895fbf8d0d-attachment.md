# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\Patient\AssignDOS.spec.js >> Assign DOS flow
- Location: Scripts\Tests\Patient\AssignDOS.spec.js:7:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Patients' })

```

# Test source

```ts
  1  | export class AssignDOSPage {
  2  |     constructor(page) {
  3  |       this.page = page;
  4  |       this.patientsMenu = page.getByRole('link', { name: 'Patients' });
  5  |       this.selectPractice = page.locator('div:has-text("Select Practice")').locator('.select__control');
  6  |       this.searchPatient = page.getByPlaceholder('patient name');
  7  |       this.submit = page.getByRole('button', { name: 'Submit' });
  8  |       this.assign = page.getByRole('button', { name: 'Assign' });
  9  |       this.status = page.locator('div').filter({ hasText: /^StatusSelect\.\.\.$/ }).locator('svg');
  10 |       this.firmPaymentAmount = page.locator('input[name="firmPaymentAmount"]');
  11 |       this.firmPaymentDate = page.locator('input[name="firmPaymentDate"]');
  12 |       this.amountInDispute = page.locator('input[name="amountInDispute"]');
  13 |       this.sentDate = page.locator('input[name="sentDate"]');
  14 |       this.billedAmount = page.locator('input[name="billedAmount"]');
  15 |       this.decision = page.locator('.select__value-container').nth(2);
  16 |       this.assignDOS = page.getByRole('button', { name: 'Assign DOS' });
  17 |     }
  18 |    
  19 |     // 🔹 Navigation
  20 |     async navigateToPatients() {
> 21 |       await this.patientsMenu.click();
     |                               ^ Error: locator.click: Target page, context or browser has been closed
  22 |     }
  23 |    
  24 |     // 🔹 Practice selection
  25 |     async selectPractice(hospital) {
  26 |       await this.selectPractice.click();
  27 |       await this.page.getByRole('option', { name: hospital, exact: true }).click();
  28 |     }
  29 |    
  30 |     // 🔹 Search patient
  31 |     async searchPatient(fullName) {
  32 |       await this.searchPatient.fill(fullName);
  33 |       await this.submit.click();
  34 |     }
  35 |    
  36 |     // 🔹 Select patient
  37 |     async selectPatient(claimNumber) {
  38 |       
  39 |       await this.selectPatient.click();
  40 |     }
  41 |    
  42 |     async clickAssign() {
  43 |       await this.assign.click();
  44 |     }
  45 |    
  46 |     // 🔹 Generic React Select (Reusable 🔥)
  47 |     async selectDropdown(label, value) {
  48 |       await this.selectDropdown.click();
  49 |       await this.page.getByRole('option', { name: value, exact: true }).click();
  50 |     }
  51 |    
  52 |     // 🔹 Status dropdown
  53 |     async selectStatus(status) {
  54 |       await this.status.click();
  55 |       await this.page.getByRole('option', { name: status, exact: true }).click();
  56 |     }
  57 |    
  58 |     // 🔹 Fill form
  59 |     async fillForm(assignDOS) {
  60 |       await this.firmPaymentAmount.fill(assignDOS.firmPaymentAmount);
  61 |       await this.firmPaymentDate.fill(assignDOS.firmPaymentDate);
  62 |       await this.amountInDispute.fill(assignDOS.amountInDispute);
  63 |       await this.sentDate.fill(assignDOS.sentDate);
  64 |       await this.billedAmount.fill(assignDOS.billedAmount);
  65 |     }
  66 |    
  67 |     // 🔹 Decision dropdown
  68 |     async selectDecision(decision) {
  69 |       await this.decision.click();
  70 |       await this.page.getByRole('option', { name: decision, exact: true }).click();
  71 |     }
  72 |    
  73 |     async submit() {
  74 |       await this.assignDOS.click();
  75 |     }
  76 | }
```