import { test, expect } from '../../Fixtures/baseTest';

test.describe('Practice Management Flow', () => {

    test('Create Practice', async ({ loginPage, practicePage, testData }) => {

        await loginPage.navigate(testData.adminUrl);
        await loginPage.login(testData.admin.username, testData.admin.password);

        await practicePage.navigateToPractices();
        await practicePage.clickCreate();

        await practicePage.createPractice(testData.practice);

        // Optional validation
        await expect(practicePage.page).toHaveURL(/practices/);
    });


    test('Edit & View Practice', async ({ loginPage, practicePage, testData }) => {

        await loginPage.navigate(testData.adminUrl);
        await loginPage.login(testData.admin.username, testData.admin.password);

        await practicePage.navigateToPractices();

        await practicePage.editPractice(testData.practice.practiceName);

        await practicePage.viewPractice();
    });

});