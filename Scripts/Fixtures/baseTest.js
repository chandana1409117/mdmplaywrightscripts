import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { UserPage } from '../pages/UserPage';
import { loadTestData } from '../Utils/dataLoader';
import { MailSlurp } from 'mailslurp-client';


import dotenv from 'dotenv';

dotenv.config();

export const test = base.extend({

    // ✅ Login Page Fixture
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    // ✅ Users Page Fixture (NEW)
    usersPage: async ({ page }, use) => {
        await use(new UserPage(page));
    },

    mailSlurp: async ({}, use) => {
        const mailslurp = new MailSlurp({
            apiKey: process.env.MAILSLURP_API_KEY
        });
        await use(mailslurp);
    },

    inbox: async ({ mailSlurp }, use) => {
        const inbox = await mailSlurp.createInbox();
        await use(inbox);
    },

    // ✅ Test Data Fixture
    testData: async ({}, use) => {
        const data = loadTestData();
        await use(data);
    },

});

export const expect = test.expect;