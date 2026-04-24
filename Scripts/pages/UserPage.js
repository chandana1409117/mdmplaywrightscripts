import { expect } from '@playwright/test';

export class UserPage {
    constructor(page) {
        this.page = page;

        // Navigation & Buttons
        this.usersMenu = page.getByRole('link', { name: 'Users' });
        this.createBtn = page.getByRole('button', { name: 'Create' });
        this.saveBtn = page.getByRole('button', { name: 'Save' });
        this.cancelBtn = page.getByRole('button', { name: 'Cancel' });

        this.searchBox = page.getByRole('textbox', { name: 'Search user..' });
        this.editBtn = page.getByRole('button', { name: 'Edit' });

        // Inputs
        this.firstName = page.locator('input[name="firstName"]');
        this.lastName = page.locator('input[name="lastName"]');
        this.username = page.locator('input[name="username"]');
        this.email = page.locator('input[name="email"]');
        this.phone = page.locator('input[name="phone"]');
        this.password = page.locator('input[name="password"]');
    }

    async navigateToUsers() {
        await this.usersMenu.click();
    }

    async createUser(user) {
        await this.createBtn.click();

        // Fill basic fields
        await this.firstName.fill(user.firstName);
        await this.lastName.fill(user.lastName);
        await this.username.fill(user.username);
        await this.email.fill(user.email);
        await this.phone.fill(user.phone);
        await this.password.fill(user.password);

        // Select Type & Role FIRST
        await this.selectDropdownByLabel('User Type', user.type);
        await this.selectDropdownByLabel('Role', user.role);

        // Wait for dynamic fields
        await this.waitForDynamicFields(user);

        // Remaining dropdowns
        await this.selectDropdownByLabel('Location', user.location);
        await this.selectDropdownByLabel('Status', user.status);
        await this.selectDropdownByLabel('MFA Enabled', user.mfaEnabled);

        // Conditional fields
        if (user.type === 'External') {
            const roleHandlers = {
                Lawyer: this.fillLawyerFields.bind(this),
                Provider: this.fillProviderFields.bind(this),
                Attorney: this.fillAttorneyFields.bind(this)
            };

            if (roleHandlers[user.role]) {
                await roleHandlers[user.role](user);
            }
        }

        await this.saveBtn.click();
    }

    async searchUser(name) {
        await this.searchBox.fill(name);
        await this.page.getByText(name).first().click();
    }

    async editUser(user) {
        await this.editBtn.first().click();

        await this.email.fill('update' + user.email);
        await this.phone.fill('91' + user.phone);

        await this.saveBtn.click();
    }

    async cancelCreate() {
        await this.createBtn.click();
        await this.cancelBtn.click();
    }

    // 🔥 Stable dropdown (label-based)
    async selectDropdownByLabel(label, value) {
        const dropdown = this.page
            .locator(`text=${label}`)
            .locator('..')
            .locator('.select__control');

        await dropdown.click();

        const option = this.page.getByRole('option', { name: value });

        await expect(option).toBeVisible();
        await option.click();
    }

    // 🔥 Wait for dynamic fields
    async waitForDynamicFields(user) {
        if (user.type === 'External' && user.role === 'Lawyer') {
            await expect(this.page.locator('//input[@name="uniqueCode"]')).toBeVisible();
        }

        if (user.type === 'External' && user.role === 'Provider') {
            await expect(this.page.locator('input[name="providerCode"]')).toBeVisible();
        }

        if (user.type === 'External' && user.role === 'Attorney') {
            await expect(this.page.locator('input[name="attorneyCode"]')).toBeVisible();
        }
    }

    // 🔥 Conditional Fields

    async fillLawyerFields(user) {
        const uniqueCode = this.page.locator('input[name="uniqueCode"]');

        await uniqueCode.fill(user.uniqueCode);
        await this.selectDropdownByLabel('Lawyer Status', user.lawyerStatus);
    }

    async fillProviderFields(user) {
        const providerCode = this.page.locator('input[name="providerCode"]');

        await providerCode.fill(user.providerCode);
        await this.selectDropdownByLabel('Provider Status', user.providerStatus);
    }

    async fillAttorneyFields(user) {
        const attorneyCode = this.page.locator('input[name="attorneyCode"]');

        await attorneyCode.fill(user.attorneyCode);
        await this.selectDropdownByLabel('Attorney Status', user.attorneyStatus);
    }
}

export default UserPage;