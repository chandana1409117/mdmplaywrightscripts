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
  - waiting for getByRole('option', { name: 'Internal' })

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
  14 |         this.firstName = page.locator('input[name="firstName"]');
  15 |         this.lastName = page.locator('input[name="lastName"]');
  16 |         this.username = page.locator('input[name="username"]');
  17 |         this.email = page.locator('input[name="email"]');
  18 |         this.phone = page.locator('input[name="phone"]');
  19 |         this.password = page.locator('input[name="password"]');
  20 | 
  21 |         // ✅ All dropdowns (React Select)
  22 |         this.dropdowns = page.locator('.select__control');
  23 |     }
  24 | 
  25 |     async navigateToUsers() {
  26 |         await this.usersMenu.click();
  27 |     }
  28 | 
  29 |     async createUser(user) {
  30 |         await this.createBtn.click();
  31 | 
  32 |         await this.firstName.fill(user.firstName);
  33 |         await this.lastName.fill(user.lastName);
  34 |         await this.username.fill(user.username);
  35 |         await this.email.fill(user.email);
  36 |         await this.phone.fill(user.phone);
  37 |         await this.password.fill(user.password);
  38 | 
  39 |         // ✅ Correct dropdown usage (by index)
  40 |         await this.selectDropdownByIndex(0, user.type);
  41 |         await this.selectDropdownByIndex(1, user.role);
  42 |         await this.selectDropdownByIndex(2, user.location);
  43 |         await this.selectDropdownByIndex(3, user.status);
  44 |         await this.selectDropdownByIndex(4, user.mfaEnabled);
  45 | 
  46 |         await this.saveBtn.click();
  47 |     }
  48 | 
  49 |     async searchUser(fullName) {
  50 |         await this.searchBox.fill(fullName);
  51 | 
  52 |         // ✅ better than XPath
  53 |         await this.page.getByText(fullName).first().click();
  54 |     }
  55 | 
  56 |     async editUser(user) {
  57 |         await this.editBtn.first().click();
  58 | 
  59 |         await this.email.fill('update' + user.email);
  60 |         await this.phone.fill('91' + user.phone);
  61 | 
  62 |         await this.saveBtn.click();
  63 |     }
  64 | 
  65 |     async cancelCreate() {
  66 |         await this.createBtn.click();
  67 |         await this.cancelBtn.click();
  68 |     }
  69 | 
  70 |     //DROPDOWN METHOD
  71 |     async selectDropdownByIndex(index, value) {
  72 |         const dropdown = this.dropdowns.nth(index);
  73 | 
  74 |         await dropdown.click(); // open dropdown
> 75 |         await this.page.getByRole('option', { name: value }).click();
     |                                                              ^ Error: locator.click: Target page, context or browser has been closed
  76 |     }
  77 | }
  78 | 
  79 | export default UserPage;
  80 | 
```