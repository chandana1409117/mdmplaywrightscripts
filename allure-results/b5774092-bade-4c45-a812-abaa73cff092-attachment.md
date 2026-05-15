# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tests\ExternalUsers\Lawyer.spec.js >> Lawyer flow
- Location: Scripts\Tests\ExternalUsers\Lawyer.spec.js:4:5

# Error details

```
Test timeout of 180000ms exceeded.
```

```
Error: apiRequestContext._wrapApiCall: ENOENT: no such file or directory, open 'C:\Projects\arb-playwright\test-results\.playwright-artifacts-1\traces\f34092a5446686395759-f7cc89b5801cc609456f-retry1.trace'
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "New Records" [level=1] [ref=e10]
    - generic [ref=e11]:
      - generic [ref=e14]:
        - generic "Status" [ref=e15]:
          - generic [ref=e18]:
            - log [ref=e20]
            - generic [ref=e21]:
              - generic [ref=e22]:
                - generic [ref=e23]: New Records
                - combobox [ref=e25]
              - img [ref=e28] [cursor=pointer]
        - generic [ref=e30]:
          - img [ref=e31]
          - generic [ref=e34]:
            - textbox "Select search filter..." [disabled]
      - button [ref=e36] [cursor=pointer]:
        - img [ref=e37]
      - button "Adam Springer Adam Springer LAWYER" [ref=e41] [cursor=pointer]:
        - img "Adam Springer" [ref=e43]
        - generic [ref=e44]:
          - paragraph [ref=e45]: Adam Springer
          - paragraph [ref=e46]: LAWYER
        - img [ref=e48]
  - generic [ref=e51]:
    - button "MD Manage" [ref=e54] [cursor=pointer]:
      - img "MD Manage" [ref=e55]
    - navigation [ref=e57]:
      - link "Dashboard" [ref=e59] [cursor=pointer]:
        - /url: /lawyer-dashboard
        - img [ref=e60]
        - generic [ref=e63]: Dashboard
        - img [ref=e64]
      - link "New Records" [ref=e67] [cursor=pointer]:
        - /url: /new-records
        - img [ref=e68]
        - generic [ref=e71]: New Records
        - img [ref=e72]
      - link "Rejected / Need Info" [ref=e75] [cursor=pointer]:
        - /url: /need-more-info-rejected-records
        - img [ref=e76]
        - generic [ref=e78]: Rejected / Need Info
        - img [ref=e79]
      - link "Processed Records" [ref=e82] [cursor=pointer]:
        - /url: /processed-records
        - img [ref=e83]
        - generic [ref=e87]: Processed Records
        - img [ref=e88]
      - link "Attorney Records" [ref=e91] [cursor=pointer]:
        - /url: /reports
        - img [ref=e92]
        - generic [ref=e94]: Attorney Records
        - img [ref=e95]
  - main [ref=e97]:
    - generic [ref=e99]:
      - generic [ref=e103]:
        - img [ref=e104]
        - textbox "Search by patient name..." [ref=e107]
      - table [ref=e117] [cursor=pointer]:
        - generic [ref=e119]: There are no records to display
```