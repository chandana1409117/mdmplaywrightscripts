# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\ExternalUsers\Lawyer.spec.js >> Lawyer Full Flow - Single POM
- Location: Scripts\Tests\ExternalUsers\Lawyer.spec.js:3:5

# Error details

```
SyntaxError: Cannot use import statement outside a module
```

# Test source

```ts
  1  | import { test, expect } from '../../Fixtures/baseTest';
  2  | 
  3  | test('Lawyer Full Flow - Single POM', async ({ page, testData }) => {
  4  | 
> 5  |     const workflow = new (await import('../../pages/LawyerPage')).LawyerPage(page);
     |                           ^ SyntaxError: Cannot use import statement outside a module
  6  | 
  7  |     // Login
  8  |     await workflow.login(testData.externalUrl, testData.lawyer);
  9  | 
  10 |     // New Records
  11 |     await workflow.openNewRecords();
  12 |     const dosText = await workflow.openFirstRecord();
  13 | 
  14 |     // File actions
  15 |     await workflow.viewFile();
  16 |     await workflow.downloadFile();
  17 | 
  18 |     // Actions
  19 |     await workflow.rejectRecord('Rejected');
  20 |     await workflow.requestMoreInfo('Need more info');
  21 |     await workflow.startProcessing(
  22 |         testData.aaaDetails.aaaId,
  23 |         testData.aaaDetails.comments
  24 |     );
  25 | 
  26 |     // Processed
  27 |     await workflow.updateAAAInProcessed(dosText, testData.processedAAAID);
  28 | 
  29 |     // Reports
  30 |     await workflow.openReports();
  31 |     await workflow.applyReportFilters(testData.reports);
  32 | });
```