import { test, expect } from '../../Fixtures/baseTest';

function getRandomUser(users) {
    return users[Math.floor(Math.random() * users.length)];
}

let createdUser;

test.describe.serial('User Management', () => {

    test.beforeAll(async ({ testData }) => {
        createdUser = getRandomUser(testData.users);
    });

    test.beforeEach(async ({ loginPage, testData }) => {
        await loginPage.navigate(testData.adminUrl);
        await loginPage.login(testData.admin.username, testData.admin.password);
    });

    test('Create User', async ({ usersPage }) => {
        await usersPage.navigateToUsers();
        await usersPage.createUser(createdUser);
    });

    test('View User', async ({ usersPage }) => {
        await usersPage.navigateToUsers();

        const fullName = `${createdUser.firstName} ${createdUser.lastName}`;
        await usersPage.searchUser(fullName);

        await expect(usersPage.page.getByText(createdUser.email)).toBeVisible();
    });

    test('Edit User', async ({ usersPage }) => {
        await usersPage.navigateToUsers();

        const fullName = `${createdUser.firstName} ${createdUser.lastName}`;
        await usersPage.searchUser(fullName);

        await usersPage.editUser(createdUser);
    });

    test('Cancel Create', async ({ usersPage }) => {
        await usersPage.navigateToUsers();
        await usersPage.cancelCreate();

        await expect(usersPage.page).toHaveURL(/users/);
    });

});