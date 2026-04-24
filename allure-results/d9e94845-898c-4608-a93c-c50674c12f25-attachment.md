# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\User\UserManagement.spec.js >> User Management >> Create User
- Location: Scripts\Tests\User\UserManagement.spec.js:20:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByText('Internal', { exact: true })

```

# Test source

```ts
  1  | export class UserPage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  | 
  5  |         this.usersMenu = page.getByRole('link', { name: 'Users' });
  6  |         this.createBtn = page.getByRole('button', { name: 'Create' });
  7  |         this.saveBtn = page.getByRole('button', { name: 'Save' });
  8  |         this.cancelBtn = page.getByRole('button', { name: 'Cancel' });
  9  | 
  10 |         this.searchBox = page.getByRole('textbox', { name: 'Search user..' });
  11 |         this.editBtn = page.getByRole('button', { name: 'Edit' });
  12 | 
  13 |         // Inputs
  14 |         this.firstName = 'input[name="firstName"]';
  15 |         this.lastName = 'input[name="lastName"]';
  16 |         this.username = 'input[name="username"]';
  17 |         this.email = 'input[name="email"]';
  18 |         this.phone = 'input[name="phone"]';
  19 |         this.password = 'input[name="password"]';
  20 |     }
  21 | 
  22 |     async navigateToUsers() {
  23 |         await this.usersMenu.click();
  24 |     }
  25 | 
  26 |     async createUser(user) {
  27 |         await this.createBtn.click();
  28 | 
  29 |         await this.page.fill(this.firstName, user.firstName);
  30 |         await this.page.fill(this.lastName, user.lastName);
  31 |         await this.page.fill(this.username, user.username);
  32 |         await this.page.fill(this.email, user.email);
  33 |         await this.page.fill(this.phone, user.phone);
  34 |         await this.page.fill(this.password, user.password);
  35 | 
  36 |         // Dropdowns (keep reusable)
  37 |         await this.selectDropdown(user.type);
  38 |         await this.selectDropdown(user.role);
  39 |         await this.selectDropdown(user.location);
  40 |         await this.selectDropdown(user.status);
  41 |         await this.selectDropdown(user.mfaEnabled);
  42 | 
  43 |         await this.saveBtn.click();
  44 |     }
  45 | 
  46 |     async searchUser(fullName) {
  47 |         await this.searchBox.fill(fullName);
  48 |         await this.page.click(`//div[@title='${fullName}']`);
  49 |     }
  50 | 
  51 |     async editUser(user) {
  52 |         await this.editBtn.first().click();
  53 | 
  54 |         await this.page.fill(this.email, 'update' + user.email);
  55 |         await this.page.fill(this.phone, '91' + user.phone);
  56 | 
  57 |         await this.saveBtn.click();
  58 |     }
  59 | 
  60 |     async cancelCreate() {
  61 |         await this.createBtn.click();
  62 |         await this.cancelBtn.click();
  63 |     }
  64 | 
  65 |     async selectDropdown(value) {
> 66 |         await this.page.getByText(value, { exact: true }).click();
     |                                                           ^ Error: locator.click: Target page, context or browser has been closed
  67 |     }
  68 | }
  69 | export default UserPage;
```