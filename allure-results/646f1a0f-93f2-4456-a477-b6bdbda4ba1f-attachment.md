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

```
Error: browserContext.close: Target page, context or browser has been closed
```