import { test } from '../../Fixtures/baseTest';

function getRandomPatient(patients) {
    return patients[Math.floor(Math.random() * patients.length)];
}

test('Assign DOS flow', async ({ assignDOSPage, testData }) => {

    const createdPatient = getRandomPatient(testData.patient);

    const hospital = createdPatient.practice;

    await assignDOSPage.navigateToPatients();

    await assignDOSPage.selectPractice(hospital);

    await assignDOSPage.searchPatient(createdPatient.fullName);

    await assignDOSPage.selectPatient(
        createdPatient.primaryInsurance.claimNumber
    );

    await assignDOSPage.clickAssign();

    await assignDOSPage.selectStatus(testData.assignDOS.status);

    await assignDOSPage.selectDropdown(
        'Firm Attorney',
        testData.assignDOS.attorney
    );

    await assignDOSPage.selectDropdown(
        'Case Type',
        testData.assignDOS.caseType
    );

    await assignDOSPage.fillForm(testData.assignDOS);

    await assignDOSPage.selectDecision(testData.assignDOS.decision);

    await assignDOSPage.submit();

});