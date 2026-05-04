import { test, expect } from '../../Fixtures/baseTest';

test('Lawyer Full Flow - Single POM', async ({ page, testData }) => {

    const workflow = new (await import('../../pages/LawyerPage')).LawyerPage(page);

    // Login
    await workflow.login(testData.externalUrl, testData.lawyer);

    // New Records
    await workflow.openNewRecords();
    const dosText = await workflow.openFirstRecord();

    // File actions
    await workflow.viewFile();
    await workflow.downloadFile();

    // Actions
    await workflow.rejectRecord('Rejected');
    await workflow.requestMoreInfo('Need more info');
    await workflow.startProcessing(
        testData.aaaDetails.aaaId,
        testData.aaaDetails.comments
    );

    // Processed
    await workflow.updateAAAInProcessed(dosText, testData.processedAAAID);

    // Reports
    await workflow.openReports();
    await workflow.applyReportFilters(testData.reports);
});