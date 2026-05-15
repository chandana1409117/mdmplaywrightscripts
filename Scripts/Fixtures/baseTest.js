import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { UserPage } from '../pages/UserPage';
import { loadTestData } from '../Utils/dataLoader';
import { MailSlurp } from 'mailslurp-client';
import { PracticePage } from '../pages/PracticePage';
import { PatientPage } from '../pages/PatientPage';
import { DMSPage } from '../pages/DMSPage';
import { AssignDOSPage } from '../pages/AssignDOSPage';
import { LawyerPage } from '../pages/LawyerPage';
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

    // ✅ Practice Page Fixture
    practicePage: async ({ page }, use) => {
        await use(new PracticePage(page));
    },

    // ✅ Patient Page Fixture
    patientPage: async ({ page }, use) => {
        await use(new PatientPage(page));
    },

    // ✅ DMS Page Fixture
    dmsPage: async ({page}, use) => {
        await use(new DMSPage(page));
    },
    // ✅ Assign DOS Page Fixture
    assignDOSPage: async ({page}, use) => {
        await use(new AssignDOSPage(page));
    },
    // ✅ Lawyer Page Fixture
    lawyerPage: async ({page}, use) => {
        await use(new LawyerPage(page));
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