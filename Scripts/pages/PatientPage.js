import { expect } from '@playwright/test';

/** Match react-select option text (spacing + case may differ from JSON). */
function optionNamePattern(label) {
    const parts = String(label)
        .trim()
        .split(/\s+/)
        .map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    return new RegExp(`^${parts.join('\\s+')}$`, 'i');
}

export class PatientPage {
    constructor(page) {
        this.page = page;

        this.patientsMenu = page.getByRole('navigation').getByRole('link', { name: 'Patients' }).first();
        this.createBtn = page.getByRole('button', { name: 'Create' });
        this.saveBtn = page.getByRole('button', { name: 'Save' });

        this.editBtn = page.getByRole('button', { name: 'Edit' });
        this.viewBtn = page.getByRole('button', { name: 'View' });

        // Basic fields
        this.patientId = page.locator('input[name="patientIdSuffix"]');
        this.firstName = page.locator('input[name="firstName"]');
        this.lastName = page.locator('input[name="lastName"]');
        this.dob = page.getByRole('textbox', { name: 'MM/DD/YYYY' }).first();
        this.ssn = page.locator('input[name="ssn"]');
        this.address = page.locator('input[name="address"]');
        this.city = page.locator('input[name="city"]');
        this.state = page.locator('input[name="state"]');
        this.zip = page.locator('input[name="zip"]');
        this.phone = page.locator('input[name="phone"]');
    }

    async navigateToPatients() {
        await this.patientsMenu.click();
    }

    async selectDropdownByIndex(index, value) {
        if (value == null || String(value).trim() === '') {
            throw new Error(`selectDropdownByIndex(${index}): option label is required (got ${JSON.stringify(value)})`);
        }
        const dropdown = this.page.locator('.select__control').nth(index + 1);
        await dropdown.click();
        await this.page
            .getByRole('listbox')
            .last()
            .getByRole('option', { name: optionNamePattern(value) })
            .first()
            .click();
    }

    async createPatient(data) {
        await this.createBtn.click();

        // Practice
        await this.selectDropdownByIndex(0, data.practice);

        // Basic details
        await this.patientId.fill(data.patientIdSuffix);
        await this.firstName.fill(data.firstName);
        await this.lastName.fill(data.lastName);
        await this.dob.fill(data.dob);
        const sexValue = data.gender === 'Female' ? 'F' : 'M';
        await this.page.locator(`input[name="sex"][value="${sexValue}"]`).first().check();

        await this.ssn.fill(data.ssn);
        await this.address.fill(data.address);
        await this.city.fill(data.city);
        await this.state.fill(data.state);
        await this.zip.fill(data.zip);
        await this.phone.fill(data.phone);

        // Primary Insurance
        await this.selectDropdownByIndex(1, data.primaryInsurance.name);

        await this.page.fill('input[name="primaryInsurance.claimNumber"]', data.primaryInsurance.claimNumber);
        await this.page.fill('input[name="primaryInsurance.policyNumber"]', data.primaryInsurance.policyNumber);
        await this.page.getByRole('textbox', { name: 'MM/DD/YYYY' }).nth(2).fill(data.primaryInsurance.doa);

        // Secondary Insurance (optional)
        if (data.secondaryInsurance?.name) {
            await this.selectDropdownByIndex(2, data.secondaryInsurance.name);

            await this.page.fill('input[name="secondaryInsurance.claimNumber"]', data.secondaryInsurance.claimNumber);
            await this.page.fill('input[name="secondaryInsurance.policyNumber"]', data.secondaryInsurance.policyNumber);
        }

        await this.saveBtn.click();
    }

    async editPatient(data) {
        await this.editBtn.first().click();

        await this.firstName.fill(data.firstName);
        await this.lastName.fill(data.lastName);
        await this.ssn.fill(data.ssn);

        await this.saveBtn.click();
    }

    async viewPatient(data) {
        await this.viewBtn.first().click();

        await expect(this.page.getByText(data.firstName)).toBeVisible();
        await expect(this.page.getByText(data.lastName)).toBeVisible();
    }
}

export default PatientPage;