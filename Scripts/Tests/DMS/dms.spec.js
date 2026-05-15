import path from 'path';
import fs from 'fs';
import { test, expect } from '../../Fixtures/baseTest';

test.describe('DMS Upload Flow', () => {
    test('Upload document in DMS', async ({ loginPage, dmsPage, testData }) => {
        const { admin, dms: dmsCases } = testData;
        const dmsData = dmsCases[0];

        const filePath = path.join(
            process.cwd(),
            'Scripts',
            'Tests',
            'DMS',
            'fixtures',
            'dms-upload.pdf'
        );
        if (!fs.existsSync(filePath)) {
            throw new Error(`DMS upload fixture missing: ${filePath}`);
        }

        await loginPage.navigate(testData.adminUrl);
        await loginPage.login(admin.username, admin.password);

        await dmsPage.navigateToDMS();

        await dmsPage.selectPractice(dmsData.hospital);
        await dmsPage.searchRecord(dmsData.searchValue);
        await dmsPage.selectDocumentType(dmsData.documentType);
        await dmsPage.selectDateRange(dmsData.fromDate, dmsData.toDate);

        await dmsPage.uploadFile(filePath);
        await dmsPage.completeUploadFlow();
    });
});
