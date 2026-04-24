# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\User\UserManagement.spec.js >> User Management >> Create User
- Location: Scripts\Tests\User\UserManagement.spec.js:20:9

# Error details

```
Error: ENOENT: no such file or directory, open 'C:\Projects\arb-playwright\test-data\testdata.json'
```

# Test source

```ts
  1 | import fs from 'fs';
  2 | import path from 'path';
  3 | 
  4 | export function loadTestData() {
  5 |     const dataPath = path.join(process.cwd(), 'test-data', 'testdata.json');
> 6 |     return JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    |                          ^ Error: ENOENT: no such file or directory, open 'C:\Projects\arb-playwright\test-data\testdata.json'
  7 | }
```