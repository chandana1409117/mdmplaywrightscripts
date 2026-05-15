# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\ExternalUsers\Lawyer.spec.js >> Lawyer flow
- Location: Scripts\Tests\ExternalUsers\Lawyer.spec.js:4:5

# Error details

```
Test timeout of 180000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 180000ms exceeded.
Call log:
  - waiting for locator('[data-testid^="expander-button"]').first() to be visible

```

# Page snapshot

```yaml
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
      - link "New Records" [active] [ref=e67] [cursor=pointer]:
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
      - table [ref=e117] [cursor=pointer]:
        - generic [ref=e119]: There are no records to display
```

# Test source

```ts
  1   | import { expect } from '@playwright/test';
  2   | 
  3   | export class LawyerPage {
  4   |     constructor(page) {
  5   |         this.page = page;
  6   | 
  7   |         // 🔐 Login
  8   |         this.username = page.locator('input[name="username"]');
  9   |         this.password = page.locator('input[name="password"]');
  10  |         this.signInBtn = page.getByRole('button', { name: 'Sign In' });
  11  | 
  12  |         // 📁 Navigation
  13  |         this.newRecordsLink = page.getByRole('link', { name: 'New Records' });
  14  |         this.processedRecordsLink = page.getByRole('link', { name: 'Processed Records' });
  15  |         this.attorneyRecordsLink = page.getByRole('link', { name: 'Attorney Records' });
  16  | 
  17  |         // 📊 Common Locators
  18  |         this.expanders = page.locator('[data-testid^="expander-button"]');
  19  |         this.dosCells = page.locator('td').filter({ hasText: '_' });
  20  | 
  21  |         // 📄 File actions
  22  |         this.viewFileBtn = page.locator('button[title="View file"]');
  23  |         this.downloadBtn = page.getByRole('button', { name: 'Download this file' });
  24  | 
  25  |         // ⚙ Actions
  26  |         this.rejectBtn = page.locator('//button[@title="Reject Record"]');
  27  |         this.startProcessingBtn = page.locator('//button[@title="Start Processing Record"]');
  28  | 
  29  |         // 📝 Inputs
  30  |         this.commentBox = page.getByRole('textbox', { name: 'Comments *' });
  31  |     }
  32  | 
  33  |     // 🔐 LOGIN
  34  |     async login(url, user) {
  35  |         await this.page.goto(url);
  36  |         await this.username.fill(user.username);
  37  |         await this.password.fill(user.password);
  38  |         await this.signInBtn.click();
  39  |     }
  40  | 
  41  |     // 📁 OPEN NEW RECORDS
  42  |     async openNewRecords() {
  43  |         await this.newRecordsLink.click();
> 44  |         await this.expanders.first().waitFor();
      |                                      ^ Error: locator.waitFor: Test timeout of 180000ms exceeded.
  45  |     }
  46  | 
  47  |     // 🔹 OPEN FIRST RECORD + GET DOS
  48  |     async openFirstRecord() {
  49  |         await this.expanders.first().click();
  50  | 
  51  |         const dosText = await this.dosCells.first().innerText();
  52  |         await this.dosCells.first().click();
  53  | 
  54  |         await this.page.waitForLoadState('domcontentloaded');
  55  |         return dosText;
  56  |     }
  57  | 
  58  |     // 📄 VIEW FILE
  59  |     async viewFile() {
  60  |         const [filePage] = await Promise.all([
  61  |             this.page.waitForEvent('popup'),
  62  |             this.viewFileBtn.first().click()
  63  |         ]);
  64  | 
  65  |         // Popup may be PDF/image; DOM load events are unreliable
  66  |         try {
  67  |             await filePage.waitForLoadState('load', { timeout: 15_000 });
  68  |         } catch {
  69  |             await new Promise((r) => setTimeout(r, 1500));
  70  |         }
  71  |         await filePage.close();
  72  |     }
  73  | 
  74  |     // ⬇ DOWNLOAD FILE
  75  |     async downloadFile() {
  76  |         const [download] = await Promise.all([
  77  |             this.page.waitForEvent('download'),
  78  |             this.downloadBtn.first().click()
  79  |         ]);
  80  |         return download;
  81  |     }
  82  | 
  83  |     // ❌ REJECT
  84  |     async rejectRecord(comment) {
  85  |         await this.rejectBtn.first().click();
  86  |         await this.commentBox.fill(comment);
  87  |         await this.page.getByRole('button', { name: 'Reject', exact: true }).click();
  88  |         await expect(this.commentBox).toBeHidden({ timeout: 30_000 });
  89  |     }
  90  | 
  91  |     /** After list actions (e.g. reject), detail row re-mounts — re-open before the next toolbar click. */
  92  |     async reopenFirstRecordDetail() {
  93  |         await this.expanders.first().waitFor({ state: 'visible', timeout: 30_000 });
  94  |         await this.expanders.first().click();
  95  |         await this.dosCells.first().waitFor({ state: 'visible', timeout: 15_000 });
  96  |         await this.dosCells.first().click();
  97  |         await this.page.waitForLoadState('domcontentloaded');
  98  |     }
  99  | 
  100 |     // ℹ REQUEST INFO
  101 |     async requestMoreInfo(comment) {
  102 |         const requestBtn = this.page.locator('button[title="Request More Information"]');
  103 |         await requestBtn.click({ force: true, timeout: 30_000 });
  104 |         await this.commentBox.fill(comment);
  105 |         await this.page.getByRole('button', { name: 'Submit' }).click();
  106 |         await expect(this.commentBox).toBeHidden({ timeout: 30_000 });
  107 |     }
  108 | 
  109 |     // ▶ START PROCESSING
  110 |     async startProcessing(aaaId, comments) {
  111 |         await this.startProcessingBtn.first().click();
  112 | 
  113 |         await this.page.fill('#start-processing-aaa-id', aaaId);
  114 |         await this.page.fill('#start-processing-comments', comments);
  115 | 
  116 |         await this.page.getByRole('button', { name: 'Start Processing' }).click();
  117 |     }
  118 | 
  119 |     // 🔄 UPDATE AAA IN PROCESSED
  120 |     async updateAAAInProcessed(dosText, aaaData) {
  121 |         await this.processedRecordsLink.click();
  122 |         await this.expanders.first().waitFor();
  123 | 
  124 |         const expanders = await this.expanders.all();
  125 | 
  126 |         for (const exp of expanders) {
  127 |             await exp.click();
  128 | 
  129 |             const rows = this.page.locator('tr').filter({ hasText: '_' });
  130 |             const count = await rows.count();
  131 | 
  132 |             for (let i = 0; i < count; i++) {
  133 |                 const text = await rows.nth(i).innerText();
  134 | 
  135 |                 if (text.includes(dosText)) {
  136 |                     await rows.nth(i).getByRole('button', { name: 'AAA ID' }).click();
  137 | 
  138 |                     await this.page.fill('#aaaId', aaaData.aaaId);
  139 |                     await this.page.fill('#comments', aaaData.comments);
  140 | 
  141 |                     await this.page.getByRole('button', { name: 'Update AAA Index' }).click();
  142 | 
  143 |                     return true;
  144 |                 }
```