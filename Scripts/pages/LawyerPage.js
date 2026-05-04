import { expect } from '@playwright/test';

export class LawyerPage {
    constructor(page) {
        this.page = page;

        // 🔐 Login
        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.signInBtn = page.getByRole('button', { name: 'Sign In' });

        // 📁 Navigation
        this.newRecordsLink = page.getByRole('link', { name: 'New Records' });
        this.processedRecordsLink = page.getByRole('link', { name: 'Processed Records' });
        this.attorneyRecordsLink = page.getByRole('link', { name: 'Attorney Records' });

        // 📊 Common Locators
        this.expanders = page.locator('[data-testid^="expander-button"]');
        this.dosCells = page.locator('td').filter({ hasText: '_' });

        // 📄 File actions
        this.viewFileBtn = page.locator('button[title="View file"]');
        this.downloadBtn = page.getByRole('button', { name: 'Download this file' });

        // ⚙ Actions
        this.rejectBtn = page.locator('//button[@title="Reject Record"]');
        this.requestInfoBtn = page.locator('//button[@title="Request More Information"]');
        this.startProcessingBtn = page.locator('//button[@title="Start Processing Record"]');

        // 📝 Inputs
        this.commentBox = page.getByRole('textbox', { name: 'Comments *' });
    }

    // 🔐 LOGIN
    async login(url, user) {
        await this.page.goto(externalUrl);
        await this.username.fill(user.lawyer.username);
        await this.password.fill(user.lawyer.password);
        await this.signInBtn.click();
    }

    // 📁 OPEN NEW RECORDS
    async openNewRecords() {
        await this.newRecordsLink.click();
        await this.expanders.first().waitFor();
    }

    // 🔹 OPEN FIRST RECORD + GET DOS
    async openFirstRecord() {
        await this.expanders.first().click();

        const dosText = await this.dosCells.first().innerText();
        await this.dosCells.first().click();

        await this.page.waitForLoadState('networkidle');
        return dosText;
    }

    // 📄 VIEW FILE
    async viewFile() {
        const [filePage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.viewFileBtn.first().click()
        ]);

        await filePage.waitForLoadState();
        await filePage.close();
    }

    // ⬇ DOWNLOAD FILE
    async downloadFile() {
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.downloadBtn.first().click()
        ]);
        return download;
    }

    // ❌ REJECT
    async rejectRecord(comment) {
        await this.rejectBtn.first().click();
        await this.commentBox.fill(comment);
        await this.page.getByRole('button', { name: 'Reject' }).click();
    }

    // ℹ REQUEST INFO
    async requestMoreInfo(comment) {
        await this.requestInfoBtn.first().click();
        await this.commentBox.fill(comment);
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }

    // ▶ START PROCESSING
    async startProcessing(aaaId, comments) {
        await this.startProcessingBtn.first().click();

        await this.page.fill('#start-processing-aaa-id', aaaId);
        await this.page.fill('#start-processing-comments', comments);

        await this.page.getByRole('button', { name: 'Start Processing' }).click();
    }

    // 🔄 UPDATE AAA IN PROCESSED
    async updateAAAInProcessed(dosText, aaaData) {
        await this.processedRecordsLink.click();
        await this.expanders.first().waitFor();

        const expanders = await this.expanders.all();

        for (const exp of expanders) {
            await exp.click();

            const rows = this.page.locator('tr').filter({ hasText: '_' });
            const count = await rows.count();

            for (let i = 0; i < count; i++) {
                const text = await rows.nth(i).innerText();

                if (text.includes(dosText)) {
                    await rows.nth(i).getByRole('button', { name: 'AAA ID' }).click();

                    await this.page.fill('#aaaId', aaaData.aaaId);
                    await this.page.fill('#comments', aaaData.comments);

                    await this.page.getByRole('button', { name: 'Update AAA Index' }).click();

                    return true;
                }
            }
        }

        throw new Error(`❌ DOS not found: ${dosText}`);
    }

    // 📊 REPORTS
    async openReports() {
        await this.attorneyRecordsLink.click();
    }

    async applyReportFilters(data) {
        await this.page.getByRole('option', { name: data.hospital }).click();
        await this.page.getByRole('option', { name: data.recordType }).click();
        await this.page.getByRole('option', { name: data.aaaIndex }).click();

        await this.page.getByRole('button', { name: 'Apply Filters' }).click();
    }
}

export default LawyerPage;