import { test } from '../../Fixtures/baseTest';


test('Assign DOS flow', async ({ assignDOSPage }) => {

  const patient = getRandompatient();   // your existing function
  const hospital = randomdms.hospital;  // your existing data

  await assignDOSPage.navigateToPatients();
  await assignDOSPage.selectPractice(hospital);
  await assignDOSPage.searchPatient(patient.fullName);
  await assignDOSPage.selectPatient(patient.primaryInsurance.claimNumber);
  await assignDOSPage.clickAssign();
  await assignDOSPage.selectStatus(assignDOS.status);
  await assignDOSPage.selectDropdown('Firm Attorney', assignDOS.attorney);
  await assignDOSPage.selectDropdown('Case Type', assignDOS.caseType);
  await assignDOSPage.fillForm(assignDOS);
  await assignDOSPage.selectDecision(assignDOS.decision);
  await assignDOSPage.submit();

});