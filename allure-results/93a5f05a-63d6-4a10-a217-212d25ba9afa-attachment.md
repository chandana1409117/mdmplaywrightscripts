# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\DMS\dms.spec.js >> DMS Upload Flow >> Upload document in DMS
- Location: Scripts\Tests\DMS\dms.spec.js:6:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('option', { name: 'IMAGE HOSPITALS', exact: true }).first()

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
  11 |         // Practice Name* under main DMS form (not the header "Select Practice" control)
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
> 39 | 
     |                                                                                          ^ Error: locator.click: Target page, context or browser has been closed
  40 |     async searchRecord(value) {
  41 |         await this.searchBox.fill(value);
  42 |         await this.searchBtn.click();
  43 |     }
  44 | 
  45 |     async selectDocumentType(type) {
  46 |         await this.documentTypeDropdown.click();
  47 |         await this.page.getByRole('option', { name: type }).click();
  48 |     }
  49 | 
  50 |     async selectDateRange(from, to) {
  51 |         await this.fromDate.fill(from);
  52 |         await this.toDate.fill(to);
  53 |     }
  54 | 
  55 |     async uploadFile(filePath) {
  56 |         await this.fileInput.waitFor({ state: 'attached' });
  57 |         await this.fileInput.setInputFiles(filePath);
  58 |     }
  59 | 
  60 |     async completeUploadFlow() {
  61 |         await expect(this.selectPageBtn).toBeVisible();
  62 |         await this.selectPageBtn.click();
  63 | 
  64 |         await expect(this.addBtn).toBeVisible();
  65 |         await this.addBtn.click();
  66 | 
  67 |         await expect(this.saveBtn).toBeVisible();
  68 |         await this.saveBtn.click();
  69 |     }
  70 | }
  71 | 
  72 | export default DMSPage;
```