import { expect } from '@playwright/test';

export class PracticePage {
    constructor(page) {
        this.page = page;

        this.practicesMenu = page.getByRole('link', { name: 'Practices' });
        this.createBtn = page.getByRole('button', { name: 'Create' });
        this.saveBtn = page.getByRole('button', { name: 'Save' });

        this.editBtn = page.getByRole('button', { name: 'Edit' });
        this.viewBtn = page.getByRole('button', { name: 'View' });

        // Inputs
        this.practiceId = page.locator("//input[@name='practiceId']");
        this.practiceName = page.locator("//input[@name='practiceName']");
        this.sisPrefix = page.locator("//input[@name='sisPrefix']");
        this.doctor = page.locator("//input[@name='doctor']");
        this.email = page.locator("//input[@name='email']");
        this.phone = page.locator("//input[@name='phone']");
        this.fax = page.locator("//input[@name='fax']");
        this.address1 = page.locator("//input[@name='address1']");
        this.address2 = page.locator("//input[@name='address2']");
        this.city = page.locator("//input[@name='city']");
        this.state = page.locator("//input[@name='state']");
        this.zip = page.locator("//input[@name='zip']");
        this.tin = page.locator("//input[@name='tin']");
    }

    async navigateToPractices() {
        await this.practicesMenu.click();
    }

    async clickCreate() {
        await this.createBtn.click();
    }

    async createPractice(data) {
        await this.practiceId.fill(data.practiceId);
        await this.practiceName.fill(data.practiceName);
        await this.sisPrefix.fill(data.sisPrefix);
        await this.doctor.fill(data.doctor);
        await this.email.fill(data.email);
        await this.phone.fill(data.phone);
        await this.fax.fill(data.fax);
        await this.address1.fill(data.address1);
        await this.address2.fill(data.address2);
        await this.city.fill(data.city);
        await this.state.fill(data.state);
        await this.zip.fill(data.zip);
        await this.tin.fill(data.tin);

        await this.saveBtn.click();
    }

    async editPractice(newName) {
        await this.editBtn.first().click();
        await this.practiceName.fill(newName);
        await this.saveBtn.click();
    }

    async viewPractice() {
        await this.viewBtn.first().click();
    }
}