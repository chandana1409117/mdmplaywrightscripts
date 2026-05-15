# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\ExternalUsers\Lawyer.spec.js >> Lawyer flow
- Location: Scripts\Tests\ExternalUsers\Lawyer.spec.js:4:5

# Error details

```
TypeError: lawyerPage.reopenFirstRecordDetail is not a function
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e5]:
      - heading "New Records" [level=1] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e14]:
          - generic "Status" [ref=e15]:
            - generic [ref=e18]:
              - log [ref=e20]
              - generic [ref=e21]:
                - generic [ref=e22]:
                  - generic [ref=e23]: New Records
                  - combobox [ref=e25]
                - img [ref=e28] [cursor=pointer]
          - generic [ref=e30]:
            - img [ref=e31]
            - generic [ref=e34]:
              - textbox "Select search filter..." [disabled]
        - button [ref=e36] [cursor=pointer]:
          - img [ref=e37]
        - button "Adam Springer Adam Springer LAWYER" [ref=e41] [cursor=pointer]:
          - img "Adam Springer" [ref=e43]
          - generic [ref=e44]:
            - paragraph [ref=e45]: Adam Springer
            - paragraph [ref=e46]: LAWYER
          - img [ref=e48]
    - generic [ref=e51]:
      - button "MD Manage" [ref=e54] [cursor=pointer]:
        - img "MD Manage" [ref=e55]
      - navigation [ref=e57]:
        - link "Dashboard" [ref=e59] [cursor=pointer]:
          - /url: /lawyer-dashboard
          - img [ref=e60]
          - generic [ref=e63]: Dashboard
          - img [ref=e64]
        - link "New Records" [ref=e67] [cursor=pointer]:
          - /url: /new-records
          - img [ref=e68]
          - generic [ref=e71]: New Records
          - img [ref=e72]
        - link "Rejected / Need Info" [ref=e75] [cursor=pointer]:
          - /url: /need-more-info-rejected-records
          - img [ref=e76]
          - generic [ref=e78]: Rejected / Need Info
          - img [ref=e79]
        - link "Processed Records" [ref=e82] [cursor=pointer]:
          - /url: /processed-records
          - img [ref=e83]
          - generic [ref=e87]: Processed Records
          - img [ref=e88]
        - link "Attorney Records" [ref=e91] [cursor=pointer]:
          - /url: /reports
          - img [ref=e92]
          - generic [ref=e94]: Attorney Records
          - img [ref=e95]
    - main [ref=e97]:
      - generic [ref=e99]:
        - generic [ref=e103]:
          - img [ref=e104]
          - textbox "Search by patient name..." [ref=e107]
        - generic [ref=e114]:
          - table [ref=e117] [cursor=pointer]:
            - rowgroup [ref=e118]:
              - row "Patient Practice Name Insurance Name Date of Accident Policy Number Claim Number" [ref=e119]:
                - columnheader "Patient" [ref=e122]:
                  - generic [ref=e123]: Patient
                - columnheader "Practice Name" [ref=e125]:
                  - generic [ref=e126]: Practice Name
                - columnheader "Insurance Name" [ref=e128]:
                  - generic [ref=e129]: Insurance Name
                - columnheader "Date of Accident" [ref=e131]:
                  - generic [ref=e132]: Date of Accident
                - columnheader "Policy Number" [ref=e134]:
                  - generic [ref=e135]: Policy Number
                - columnheader "Claim Number" [ref=e137]:
                  - generic [ref=e138]: Claim Number
            - rowgroup [ref=e139]:
              - 'row "Expand Row LL LiamUpdated Lopez ID: RB100 RAINBOW HOSPITALS HORIZON BCBS - MM 12-12-2024 877654 893243" [ref=e140]':
                - button "Expand Row" [ref=e142]:
                  - img [ref=e143]
                - 'cell "LL LiamUpdated Lopez ID: RB100" [ref=e146]':
                  - generic "Click to expand" [ref=e147]:
                    - generic [ref=e149]: LL
                    - generic [ref=e150]:
                      - generic "LiamUpdated Lopez" [ref=e151]
                      - 'generic "ID: RB100" [ref=e152]'
                - cell "RAINBOW HOSPITALS" [ref=e153]:
                  - generic "RAINBOW HOSPITALS" [ref=e154]
                - cell "HORIZON BCBS - MM" [ref=e155]:
                  - generic "HORIZON BCBS - MM" [ref=e156]
                - cell "12-12-2024" [ref=e157]:
                  - generic [ref=e158]: 12-12-2024
                - cell "877654" [ref=e159]:
                  - generic "877654" [ref=e160]
                - cell "893243" [ref=e161]:
                  - generic "893243" [ref=e162]
          - navigation [ref=e164]:
            - generic [ref=e165]: "Rows per page:"
            - generic [ref=e166]:
              - combobox "Rows per page:" [ref=e167] [cursor=pointer]:
                - option "10" [selected]
                - option "20"
                - option "30"
                - option "40"
                - option "50"
              - img
            - generic [ref=e168]: 1-1 of 1
            - generic [ref=e169]:
              - button "First Page" [disabled] [ref=e170]:
                - img [ref=e171]
              - button "Previous Page" [disabled] [ref=e174]:
                - img [ref=e175]
              - button "Next Page" [disabled] [ref=e178]:
                - img [ref=e179]
              - button "Last Page" [disabled] [ref=e182]:
                - img [ref=e183]
  - generic:
    - status [ref=e191]: Arbitration Record rejected successfully
    - status [ref=e197]: File downloaded successfully!
```

# Test source

```ts
  1  | import { test, expect } from '../../Fixtures/baseTest';
  2  | import { LawyerPage } from '../../pages/LawyerPage';
  3  | 
  4  | test('Lawyer flow', async ({ page, testData }) => {
  5  |     test.setTimeout(180_000);
  6  | 
  7  |     const lawyerPage = new LawyerPage(page);
  8  |     // Login
  9  |     await lawyerPage.login(testData.externalUrl, testData.lawyer);
  10 | 
  11 |     // New Records
  12 |     await lawyerPage.openNewRecords();
  13 |     const dosText = await lawyerPage.openFirstRecord();
  14 | 
  15 |     // File actions
  16 |     await lawyerPage.viewFile();
  17 |     await lawyerPage.downloadFile();
  18 | 
  19 |     // Actions (reject remounts the row — reopen detail before the next action)
  20 |     await lawyerPage.rejectRecord('Rejected');
> 21 |     await lawyerPage.reopenFirstRecordDetail();
     |                      ^ TypeError: lawyerPage.reopenFirstRecordDetail is not a function
  22 |     await lawyerPage.requestMoreInfo('Need more info');
  23 |     await lawyerPage.reopenFirstRecordDetail();
  24 |     await lawyerPage.startProcessing(
  25 |         testData.aaaDetails.aaaId,
  26 |         testData.aaaDetails.comments
  27 |     );
  28 | 
  29 |     // Processed
  30 |     await lawyerPage.updateAAAInProcessed(dosText, testData.processedAAAID);
  31 | 
  32 |     // Reports
  33 |     await lawyerPage.openReports();
  34 |     await lawyerPage.applyReportFilters(testData.reports);
  35 | });
```