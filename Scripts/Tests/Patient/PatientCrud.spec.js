import { test, expect } from '../../Fixtures/baseTest';

test.describe('Patient Management', () => {

    test.beforeEach(async ({ loginPage, testData }) => {
        await loginPage.navigate(testData.adminUrl);
        await loginPage.login(testData.admin.username, testData.admin.password);
    });

    test('Create Patient', async ({ patientPage, testData }) => {
        await patientPage.navigateToPatients();
        await patientPage.createPatient(testData.patient);

        await expect(patientPage.page.getByText('Patient saved successfully')).toBeVisible();
    });

    test('Edit Patient', async ({ patientPage, testData }) => {
        await patientPage.navigateToPatients();
        await patientPage.editPatient(testData.editPatient);

        await expect(patientPage.page.getByText('Patient updated successfully')).toBeVisible();
    });

    test('View Patient', async ({ patientPage, testData }) => {
        await patientPage.navigateToPatients();
        await patientPage.viewPatient(testData.editPatient);
    });

});