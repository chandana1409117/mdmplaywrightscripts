import { expect } from '@playwright/test';

export class DMSPage {
    constructor(page) {
        this.page = page;

        // Navigation
        this.filesBtn = page.getByRole('button', { name: 'Files' });
        this.dmsMenu = page.getByRole('navigation').getByRole('link', { name: 'DMS', exact: true }).first();

        // Dropdowns
        this.practiceDropdown = page.locator('.select__control').nth(1

        );
        this.documentTypeDropdown = page.locator('div').filter({ hasText: /^Select document type/ }).first();

        // Inputs
        this.searchBox = page.getByRole('textbox', { name: 'Enter search value...' });
        this.fromDate = page.locator('input[name="fromDate"]');
        this.toDate = page.locator('input[name="toDate"]');

        // Buttons
        this.searchBtn = page.getByRole('button', { name: 'Search' });
        this.selectPageBtn = page.getByRole('button', { name: 'Select Current Page' });
        this.addBtn = page.getByRole('button', { name: 'Add' });
        this.saveBtn = page.getByRole('button', { name: 'Save' });

        // File upload
        this.fileInput = page.locator('input[type="file"]');
    }

    async navigateToDMS() {
        await this.filesBtn.click();
        await this.dmsMenu.click();
    }

    async selectPractice(practiceName) {
        await this.practiceDropdown.click();
        await this.page.getByRole('option', { name: practiceName, exact: true }).first().click();
    }

    async searchRecord(value) {
        await this.searchBox.fill(value);
        await this.searchBtn.click();
    }

    async selectDocumentType(type) {
        await this.documentTypeDropdown.click();
        await this.page.getByRole('option', { name: type }).click();
    }

    async selectDateRange(from, to) {
        await this.fromDate.fill(from);
        await this.toDate.fill(to);
    }

    async uploadFile(filePath) {
        await this.fileInput.waitFor({ state: 'attached' });
        await this.fileInput.setInputFiles(filePath);
    }

    async completeUploadFlow() {
        await expect(this.selectPageBtn).toBeVisible();
        await this.selectPageBtn.click();

        await expect(this.addBtn).toBeVisible();
        await this.addBtn.click();

        await expect(this.saveBtn).toBeVisible();
        await this.saveBtn.click();
    }
}

export default DMSPage;