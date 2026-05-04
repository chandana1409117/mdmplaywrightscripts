import { test, expect } from '../../Fixtures/baseTest';

test.describe('DMS Upload Flow', () => {

    test('Upload document in DMS', async ({ loginPage, dmsPage, testData }) => {

        const { admin, dms, filePath } = testData;

        // Login
        await loginPage.navigate(testData.adminUrl);
        await loginPage.login(admin.username, admin.password);

        // Navigate
        await dmsPage.navigateToDMS();

        // Select Practice
        await dmsPage.selectPractice(dms.hospital);

        // Search
        await dmsPage.searchRecord(dms.searchValue);

        // Select Document Type
        await dmsPage.selectDocumentType(dms.documentType);

        // Date Range
        await dmsPage.selectDateRange(dms.fromDate, dms.toDate);

        // Upload File
        await dmsPage.uploadFile(filePath);

        // Complete Flow
        await dmsPage.completeUploadFlow();

        // Optional validation (if toast exists)
        // await expect(page.getByText('Uploaded successfully')).toBeVisible();
    });

});