# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\DMS\dms.spec.js >> DMS Upload Flow >> Upload document in DMS
- Location: Scripts\Tests\DMS\dms.spec.js:6:9

# Error details

```
TypeError: Cannot read properties of undefined (reading 'buffer')
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
      - link "Users" [ref=e18] [cursor=pointer]:
        - /url: /users
        - img [ref=e19]
      - link "Practices" [ref=e32] [cursor=pointer]:
        - /url: /practice
        - img [ref=e33]
      - link "Patients" [ref=e38] [cursor=pointer]:
        - /url: /patients-list
        - img [ref=e39]
      - button "Files" [ref=e44] [cursor=pointer]:
        - img [ref=e46]
      - button "Fax" [ref=e50] [cursor=pointer]:
        - img [ref=e52]
      - link "Letters" [ref=e57] [cursor=pointer]:
        - /url: /letters
        - img [ref=e58]
      - link "Reports" [ref=e62] [cursor=pointer]:
        - /url: /reports
        - img [ref=e63]
      - button "Admin" [ref=e68] [cursor=pointer]:
        - img [ref=e70]
  - generic [ref=e73]:
    - generic [ref=e75]:
      - heading "DMS" [level=1] [ref=e80]
      - generic [ref=e81]:
        - generic [ref=e85]:
          - log [ref=e87]
          - generic [ref=e88]:
            - generic [ref=e89]:
              - generic [ref=e90]: Select Practice
              - combobox [ref=e92]
            - img [ref=e95] [cursor=pointer]
        - generic [ref=e99]:
          - img [ref=e100]
          - textbox "Please select a practice first..." [disabled] [ref=e104]
        - button "CD Chandana Duddukuri SUPER ADMIN" [ref=e106] [cursor=pointer]:
          - generic [ref=e108]: CD
          - generic [ref=e109]:
            - paragraph [ref=e110]: Chandana Duddukuri
            - paragraph [ref=e111]: SUPER ADMIN
          - img [ref=e113]
    - main [ref=e116]:
      - generic [ref=e120]:
        - generic [ref=e121]:
          - generic [ref=e122]:
            - generic [ref=e123]:
              - img [ref=e125]
              - heading "Practice & Patient Selection" [level=3] [ref=e128]
            - generic [ref=e130]:
              - generic [ref=e131]:
                - generic [ref=e132]: Practice Name*
                - generic [ref=e134]:
                  - log [ref=e136]
                  - generic [ref=e137]:
                    - generic [ref=e138]:
                      - generic [ref=e139]: RAINBOW HOSPITALS
                      - combobox [ref=e141]
                    - img [ref=e144] [cursor=pointer]
              - generic [ref=e146]:
                - generic [ref=e148]:
                  - generic [ref=e149]: Search By
                  - generic [ref=e151]:
                    - log [ref=e153]
                    - generic [ref=e154]:
                      - generic [ref=e155]:
                        - generic [ref=e156]: Patient ID
                        - combobox [ref=e158]
                      - img [ref=e161] [cursor=pointer]
                - generic [ref=e164]:
                  - generic [ref=e165]: Search Value
                  - textbox "Enter search value..." [ref=e166]: rb
                - button "Search" [ref=e168] [cursor=pointer]:
                  - img [ref=e169]
              - generic [ref=e172]:
                - generic [ref=e173]: Patients List*
                - generic [ref=e175]:
                  - log [ref=e177]
                  - generic [ref=e178]:
                    - generic [ref=e179]:
                      - generic [ref=e180]: RB2109-Lucas Brown - 10-04-2023
                      - combobox [ref=e182]
                    - img [ref=e185] [cursor=pointer]
          - generic [ref=e187]:
            - generic [ref=e188]:
              - img [ref=e190]
              - heading "Document Properties" [level=3] [ref=e193]
            - generic [ref=e194]:
              - generic [ref=e195]:
                - generic [ref=e196]: Document Type*
                - generic [ref=e198]:
                  - log [ref=e200]
                  - generic [ref=e201]:
                    - generic [ref=e202]:
                      - generic [ref=e203]: AOB
                      - combobox [ref=e205]
                    - img [ref=e208] [cursor=pointer]
              - generic [ref=e210]:
                - generic [ref=e211]:
                  - generic [ref=e212]: From Date
                  - generic [ref=e213]:
                    - textbox "MM/DD/YYYY" [ref=e214]: 02/15/2024
                    - textbox: 2024-02-15
                    - button [ref=e215] [cursor=pointer]:
                      - img [ref=e216]
                - generic [ref=e218]:
                  - generic [ref=e219]: To Date
                  - generic [ref=e220]:
                    - textbox "MM/DD/YYYY" [active] [ref=e221]: 02/15/2024
                    - textbox: 2024-02-15
                    - button [ref=e222] [cursor=pointer]:
                      - img [ref=e223]
          - generic [ref=e225]:
            - generic [ref=e227]:
              - img [ref=e229]
              - heading "Document Segregation" [level=3] [ref=e232]
            - table [ref=e234]:
              - rowgroup [ref=e235]:
                - row "Practice Patient ID Type Pages Actions" [ref=e236]:
                  - columnheader "Practice" [ref=e237]
                  - columnheader "Patient ID" [ref=e238]
                  - columnheader "Type" [ref=e239]
                  - columnheader "Pages" [ref=e240]
                  - columnheader "Actions" [ref=e241]
              - rowgroup [ref=e242]:
                - row "No document segregations yet Select pages and add them to create segregations" [ref=e243]:
                  - cell "No document segregations yet Select pages and add them to create segregations" [ref=e244]:
                    - generic [ref=e245]:
                      - img [ref=e246]
                      - paragraph [ref=e249]: No document segregations yet
                      - paragraph [ref=e250]: Select pages and add them to create segregations
        - generic [ref=e252]:
          - generic [ref=e254]:
            - img [ref=e256]
            - generic [ref=e259]:
              - heading "Document Preview" [level=3] [ref=e260]
              - paragraph [ref=e261]: Upload a document to start
          - generic [ref=e264] [cursor=pointer]:
            - img [ref=e266]
            - heading "Upload PDF Document" [level=3] [ref=e269]
            - paragraph [ref=e270]: Drag and drop your PDF file here, or click to browse and select from your computer
            - generic [ref=e271]:
              - img [ref=e272]
              - text: Browse Files
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export class DMSPage {
  4  |     constructor(page) {
  5  |         this.page = page;
  6  | 
  7  |         // Navigation
  8  |         this.filesBtn = page.getByRole('button', { name: 'Files' });
  9  |         this.dmsMenu = page.getByRole('navigation').getByRole('link', { name: 'DMS', exact: true }).first();
  10 | 
  11 |         // Practice Name* in main DMS form (skip header "Select Practice")
  12 |         this.practiceDropdown = page.locator('main').locator('.select__control').first();
  13 |         this.documentTypeDropdown = page.locator('div').filter({ hasText: /^Select document type/ }).first();
  14 | 
  15 |         // Inputs
  16 |         this.searchBox = page.getByRole('textbox', { name: 'Enter search value...' });
  17 |         this.fromDate = page.locator('input[name="fromDate"]');
  18 |         this.toDate = page.locator('input[name="toDate"]');
  19 | 
  20 |         // Buttons
  21 |         this.searchBtn = page.getByRole('button', { name: 'Search' });
  22 |         this.selectPageBtn = page.getByRole('button', { name: 'Select Current Page' });
  23 |         this.addBtn = page.getByRole('button', { name: 'Add' });
  24 |         this.saveBtn = page.getByRole('button', { name: 'Save' });
  25 | 
  26 |         // File upload
  27 |         this.fileInput = page.locator('input[type="file"]');
  28 |     }
  29 | 
  30 |     async navigateToDMS() {
  31 |         await this.filesBtn.click();
  32 |         await this.dmsMenu.click();
  33 |     }
  34 | 
  35 |     async selectPractice(practiceName) {
  36 |         await this.practiceDropdown.click();
  37 |         await this.page.getByRole('option', { name: practiceName, exact: true }).first().click();
  38 |     }
  39 | 
  40 |     async searchRecord(value) {
  41 |         if (value == null || String(value).trim() === '') {
  42 |             throw new Error(`searchRecord: search value is required (got ${JSON.stringify(value)})`);
  43 |         }
  44 |         await this.searchBox.fill(String(value));
  45 |         await this.searchBtn.click();
  46 |         await this.page
  47 |             .locator('div[class*="inset-0"][class*="z-50"]')
  48 |             .first()
  49 |             .waitFor({ state: 'hidden', timeout: 60_000 })
  50 |             .catch(() => {});
  51 |     }
  52 | 
  53 |     async selectDocumentType(type) {
  54 |         await this.documentTypeDropdown.click({ force: true });
  55 |         await this.page.getByRole('option', { name: type }).click();
  56 |     }
  57 | 
  58 |     async selectDateRange(from, to) {
  59 |         await this.fromDate.fill(from);
  60 |         await this.toDate.fill(to);
  61 |     }
  62 | 
  63 |     async uploadFile(filePath) {
  64 |         await this.fileInput.waitFor({ state: 'attached' });
> 65 |         await this.fileInput.setInputFiles(filePath);
     |                              ^ TypeError: Cannot read properties of undefined (reading 'buffer')
  66 |     }
  67 | 
  68 |     async completeUploadFlow() {
  69 |         await expect(this.selectPageBtn).toBeVisible();
  70 |         await this.selectPageBtn.click();
  71 | 
  72 |         await expect(this.addBtn).toBeVisible();
  73 |         await this.addBtn.click();
  74 | 
  75 |         await expect(this.saveBtn).toBeVisible();
  76 |         await this.saveBtn.click();
  77 |     }
  78 | }
  79 | 
  80 | export default DMSPage;
```