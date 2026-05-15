import { test, expect } from '../../Fixtures/baseTest';
import { LawyerPage } from '../../pages/LawyerPage';

test('Lawyer flow', async ({ page, testData }) => {
    test.setTimeout(180_000);

    const lawyerPage = new LawyerPage(page);
    // Login
    await lawyerPage.login(testData.externalUrl, testData.lawyer);

    // New Records
    await lawyerPage.openNewRecords();
    const dosText = await lawyerPage.openFirstRecord();

    // File actions
    await lawyerPage.viewFile();
    await lawyerPage.downloadFile();

    // Actions (reject remounts the row — reopen detail before the next action)
    await lawyerPage.rejectRecord('Rejected');
    await lawyerPage.reopenFirstRecordDetail();
    await lawyerPage.requestMoreInfo('Need more info');
    await lawyerPage.reopenFirstRecordDetail();
    await lawyerPage.startProcessing(
        testData.aaaDetails.aaaId,
        testData.aaaDetails.comments
    );

    // Processed
    await lawyerPage.updateAAAInProcessed(dosText, testData.processedAAAID);

    // Reports
    await lawyerPage.openReports();
    await lawyerPage.applyReportFilters(testData.reports);
});