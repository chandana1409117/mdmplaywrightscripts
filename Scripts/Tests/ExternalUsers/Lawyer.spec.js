import { test, expect } from '../../Fixtures/baseTest';

test('Lawyer flow', async ({ page, testData }) => {

    const lawyerPage = new LawyerPage(page);
    // Login
    await lawyerPage.login(testData.externalUrl, testData.lawyer);

    // New Records
    await lawyerPage.openNewRecords();
    const dosText = await lawyerPage.openFirstRecord();

    // File actions
    await lawyerPage.viewFile();
    await lawyerPage.downloadFile();

    // Actions
    await lawyerPage.rejectRecord('Rejected');
    await lawyerPage.requestMoreInfo('Need more info');
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