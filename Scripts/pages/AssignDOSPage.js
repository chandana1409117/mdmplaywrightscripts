export class AssignDOSPage {
    constructor(page) {
      this.page = page;
      this.patientsMenu = page.getByRole('link', { name: 'Patients' });
      this.selectPractice = page.locator('div:has-text("Select Practice")').locator('.select__control');
      this.searchPatient = page.getByPlaceholder('patient name');
      this.submit = page.getByRole('button', { name: 'Submit' });
      this.assign = page.getByRole('button', { name: 'Assign' });
      this.status = page.locator('div').filter({ hasText: /^StatusSelect\.\.\.$/ }).locator('svg');
      this.firmPaymentAmount = page.locator('input[name="firmPaymentAmount"]');
      this.firmPaymentDate = page.locator('input[name="firmPaymentDate"]');
      this.amountInDispute = page.locator('input[name="amountInDispute"]');
      this.sentDate = page.locator('input[name="sentDate"]');
      this.billedAmount = page.locator('input[name="billedAmount"]');
      this.decision = page.locator('.select__value-container').nth(2);
      this.assignDOS = page.getByRole('button', { name: 'Assign DOS' });
    }
   
    // 🔹 Navigation
    async navigateToPatients() {
      await this.patientsMenu.click();
    }
   
    // 🔹 Practice selection
    async selectPractice(hospital) {
      await this.selectPractice.click();
      await this.page.getByRole('option', { name: hospital, exact: true }).click();
    }
   
    // 🔹 Search patient
    async searchPatient(fullName) {
      await this.searchPatient.fill(fullName);
      await this.submit.click();
    }
   
    // 🔹 Select patient
    async selectPatient(claimNumber) {
      
      await this.selectPatient.click();
    }
   
    async clickAssign() {
      await this.assign.click();
    }
   
    // 🔹 Generic React Select (Reusable 🔥)
    async selectDropdown(label, value) {
      await this.selectDropdown.click();
      await this.page.getByRole('option', { name: value, exact: true }).click();
    }
   
    // 🔹 Status dropdown
    async selectStatus(status) {
      await this.status.click();
      await this.page.getByRole('option', { name: status, exact: true }).click();
    }
   
    // 🔹 Fill form
    async fillForm(assignDOS) {
      await this.firmPaymentAmount.fill(assignDOS.firmPaymentAmount);
      await this.firmPaymentDate.fill(assignDOS.firmPaymentDate);
      await this.amountInDispute.fill(assignDOS.amountInDispute);
      await this.sentDate.fill(assignDOS.sentDate);
      await this.billedAmount.fill(assignDOS.billedAmount);
    }
   
    // 🔹 Decision dropdown
    async selectDecision(decision) {
      await this.decision.click();
      await this.page.getByRole('option', { name: decision, exact: true }).click();
    }
   
    async submit() {
      await this.assignDOS.click();
    }
}