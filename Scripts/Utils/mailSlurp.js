import { MailSlurp } from 'mailslurp-client';

export function createMailClient() {
    return new MailSlurp({ apiKey: process.env.MAILSLURP_API_KEY });
}

export async function createInbox(mailslurp) {
    return await mailslurp.createInbox();
}

export async function getLatestEmail(mailslurp, inboxId) {
    return await mailslurp.waitForLatestEmail(inboxId, 30000);
}