import { test, expect } from '../../Fixtures/baseTest';

function getRandomPatient(patients) {
    return patients[Math.floor(Math.random() * patients.length)];
}

let createdPatient;
test.describe('Patient Management', () => {

    
    test.beforeAll(async ({ testData }) => {
        createdPatient = getRandomPatient(testData.patient);
    });



    test.beforeEach(async ({ loginPage, testData }) => {

        await loginPage.navigate(testData.adminUrl);

        await loginPage.login(testData.admin.username, testData.admin.password);

    });



    test('Create Patient', async ({ patientPage }) => {

        await patientPage.navigateToPatients();
    
        await patientPage.createPatient(createdPatient);
    
        //await expect(
        //    patientPage.page.getByText('Patient saved successfully')
        //).toBeVisible();
    
    });



    test('Edit Patient', async ({ patientPage }) => {

        await patientPage.navigateToPatients();
        await patientPage.selectDropdownByIndex(0, createdPatient.practice);
        
    
        await patientPage.editPatient({
    
            ...createdPatient,
    
            firstName: 'LiamUpdated',
    
        });
    
        //await expect(
        //    patientPage.page.getByText('Patient updated successfully')
        //).toBeVisible();
    
    });

    test('View Patient', async ({ patientPage }) => {

        await patientPage.selectDropdownByIndex(0, createdPatient.practice);
        await patientPage.navigateToPatients();
    
        await patientPage.viewPatient({
    
            ...createdPatient,
    
            firstName: 'LiamUpdated',
    
        });
    
    });

    });


