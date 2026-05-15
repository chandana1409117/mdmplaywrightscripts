# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\Patient\PatientCrud.spec.js >> Patient Management >> View Patient
- Location: Scripts\Tests\Patient\PatientCrud.spec.js:59:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'View' }).first()

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
      - link "Patients" [active] [ref=e47] [cursor=pointer]:
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
  4   | function optionNamePattern(label) {
  5   |     const parts = String(label)
  6   |         .trim()
  7   |         .split(/\s+/)
  8   |         .map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  9   |     return new RegExp(`^${parts.join('\\s+')}$`, 'i');
  10  | }
  11  | 
  12  | export class PatientPage {
  13  |     constructor(page) {
  14  |         this.page = page;
  15  | 
  16  |         this.patientsMenu = page.getByRole('navigation').getByRole('link', { name: 'Patients' }).first();
  17  |         this.createBtn = page.getByRole('button', { name: 'Create' });
  18  |         this.saveBtn = page.getByRole('button', { name: 'Save' });
  19  | 
  20  |         this.editBtn = page.getByRole('button', { name: 'Edit' });
  21  |         this.viewBtn = page.getByRole('button', { name: 'View' });
  22  | 
  23  |         // Basic fields
  24  |         this.patientId = page.locator('input[name="patientIdSuffix"]');
  25  |         this.firstName = page.locator('input[name="firstName"]');
  26  |         this.lastName = page.locator('input[name="lastName"]');
  27  |         this.dob = page.getByRole('textbox', { name: 'MM/DD/YYYY' }).first();
  28  |         this.ssn = page.locator('input[name="ssn"]');
  29  |         this.address = page.locator('input[name="address"]');
  30  |         this.city = page.locator('input[name="city"]');
  31  |         this.state = page.locator('input[name="state"]');
  32  |         this.zip = page.locator('input[name="zip"]');
  33  |         this.phone = page.locator('input[name="phone"]');
  34  |     }
  35  | 
  36  |     async navigateToPatients() {
  37  |         await this.patientsMenu.click();
  38  |     }
  39  | 
  40  |     async selectDropdownByIndex(index, value) {
  41  |         if (value == null || String(value).trim() === '') {
  42  |             throw new Error(`selectDropdownByIndex(${index}): option label is required (got ${JSON.stringify(value)})`);
  43  |         }
  44  |         const dropdown = this.page.locator('.select__control').nth(index + 1);
  45  |         await dropdown.click();
  46  |         await this.page
  47  |             .getByRole('listbox')
  48  |             .last()
  49  |             .getByRole('option', { name: optionNamePattern(value) })
  50  |             .first()
  51  |             .click();
  52  |     }
  53  | 
  54  |     async createPatient(data) {
  55  |         await this.createBtn.click();
  56  | 
  57  |         // Practice
  58  |         await this.selectDropdownByIndex(0, data.practice);
  59  | 
  60  |         // Basic details
  61  |         await this.patientId.fill(data.patientIdSuffix);
  62  |         await this.firstName.fill(data.firstName);
  63  |         await this.lastName.fill(data.lastName);
  64  |         await this.dob.fill(data.dob);
  65  |         const sexValue = data.gender === 'Female' ? 'F' : 'M';
  66  |         await this.page.locator(`input[name="sex"][value="${sexValue}"]`).first().check();
  67  | 
  68  |         await this.ssn.fill(data.ssn);
  69  |         await this.address.fill(data.address);
  70  |         await this.city.fill(data.city);
  71  |         await this.state.fill(data.state);
  72  |         await this.zip.fill(data.zip);
  73  |         await this.phone.fill(data.phone);
  74  | 
  75  |         // Primary Insurance
  76  |         await this.selectDropdownByIndex(1, data.primaryInsurance.name);
  77  | 
  78  |         await this.page.fill('input[name="primaryInsurance.claimNumber"]', data.primaryInsurance.claimNumber);
  79  |         await this.page.fill('input[name="primaryInsurance.policyNumber"]', data.primaryInsurance.policyNumber);
  80  |         await this.page.getByRole('textbox', { name: 'MM/DD/YYYY' }).nth(2).fill(data.primaryInsurance.doa);
  81  | 
  82  |         // Secondary Insurance (optional)
  83  |         if (data.secondaryInsurance?.name) {
  84  |             await this.selectDropdownByIndex(2, data.secondaryInsurance.name);
  85  | 
  86  |             await this.page.fill('input[name="secondaryInsurance.claimNumber"]', data.secondaryInsurance.claimNumber);
  87  |             await this.page.fill('input[name="secondaryInsurance.policyNumber"]', data.secondaryInsurance.policyNumber);
  88  |         }
  89  | 
  90  |         await this.saveBtn.click();
  91  |     }
  92  | 
  93  |     async editPatient(data) {
  94  |         await this.editBtn.first().click();
  95  | 
  96  |         await this.firstName.fill(data.firstName);
  97  |         await this.lastName.fill(data.lastName);
  98  |         await this.ssn.fill(data.ssn);
  99  | 
  100 |         await this.saveBtn.click();
  101 |     }
  102 | 
  103 |     async viewPatient(data) {
> 104 |         await this.viewBtn.first().click();
      |                                    ^ Error: locator.click: Test timeout of 30000ms exceeded.
  105 | 
  106 |         await expect(this.page.getByText(data.firstName)).toBeVisible();
  107 |         await expect(this.page.getByText(data.lastName)).toBeVisible();
  108 |     }
  109 | }
  110 | 
  111 | export default PatientPage;
```