# ServiceNow Playwright Tests (TypeScript)

Automated end-to-end tests for the [ServiceNow](https://www.servicenow.com/) platform using **Playwright**, **TypeScript**, and the **Page Object Model (POM)** pattern.

## Features
TBD

## Project Structure

SNow-PlaywrightTests-TypeScript/\
│\
├── pages/ # Page Object Models (**LoginPage.ts, etc.**)\
├── tests/ # Test files (**.spec.ts**)\
├── fixtures/ # Helper files (**e.g. secrets.json**)\
├── utils/ # Utilities (**e.g. fixture config**)\
├── playwright.config.ts # **Playwright configuration**\
├── tsconfig.json # **TypeScript config**\
└── README.md # This file

## Tests

- Login valid credentials
- Login with invalid credentials
- More...TBD

## Commands to use - Playwright

Run all tests `npx playwright test`\
Run tests with UI `npx playwright test --ui`\
View test report `npx playwright show-report`\
Run codegen to create tests `npx playwright codegen https://dev194623.service-now.com`

## Files to understand

package.json - TBD\
config.ts - TBD\
tsconfig.json - TBD\
playwright.config.ts - TBD


## Important to remember
TBD

## Commands to use - Git
TBD
