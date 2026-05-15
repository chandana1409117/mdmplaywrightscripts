# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\ExternalUsers\Lawyer.spec.js >> Lawyer flow
- Location: Scripts\Tests\ExternalUsers\Lawyer.spec.js:3:5

# Error details

```
ReferenceError: LawyerPage is not defined
```

# Test source

```ts
  1  | import { test, expect } from '../../Fixtures/baseTest';
  2  | 
  3  | test('Lawyer flow', async ({ page, testData }) => {
  4  | 
> 5  |     const lawyerPage = new LawyerPage(page);
     |                        ^ ReferenceError: LawyerPage is not defined
  6  |     // Login
  7  |     await lawyerPage.login(testData.externalUrl, testData.lawyer);
  8  | 
  9  |     // New Records
  10 |     await lawyerPage.openNewRecords();
  11 |     const dosText = await lawyerPage.openFirstRecord();
  12 | 
  13 |     // File actions
  14 |     await lawyerPage.viewFile();
  15 |     await lawyerPage.downloadFile();
  16 | 
  17 |     // Actions
  18 |     await lawyerPage.rejectRecord('Rejected');
  19 |     await lawyerPage.requestMoreInfo('Need more info');
  20 |     await lawyerPage.startProcessing(
  21 |         testData.aaaDetails.aaaId,
  22 |         testData.aaaDetails.comments
  23 |     );
  24 | 
  25 |     // Processed
  26 |     await lawyerPage.updateAAAInProcessed(dosText, testData.processedAAAID);
  27 | 
  28 |     // Reports
  29 |     await lawyerPage.openReports();
  30 |     await lawyerPage.applyReportFilters(testData.reports);
  31 | });
```