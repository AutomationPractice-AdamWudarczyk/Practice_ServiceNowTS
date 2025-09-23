# ServiceNow Playwright Tests (TypeScript)

Automated end-to-end tests for the [ServiceNow](https://www.servicenow.com/) platform using **Playwright**, **TypeScript**, and the **Page Object Model (POM)** pattern.

## Prerequisites
Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18.x or later recommended)
- A code editor such as [VS Code](https://code.visualstudio.com/) 
- Playwright installed (use `npm install playwright`)

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
- **More...TBD**

## Helpful commands to use - Playwright

 ```bash 
npx playwright test # Run all tests
``` 

 ```bash 
npx playwright test tests/login.spec.ts # Run specific test file
``` 
 ```bash 
npx playwright test --ui # Run tests with UI
```
 ```bash 
npx playwright test --headed # Run tests with browser visible
```
 ```bash 
npx playwright test --debug # Run tests with debug mode enabled
```
 ```bash 
npx playwright show-report # View test report
```
 ```bash 
npx playwright codegen https://dev194623.service-now.com #Run codegen to create tests 
```
**More will come...TBD**

## Commands to use - Git
Initialize a new Git repository 

```bash
git init  # Initialize a new Git repository
``` 
```bash
git status` # Check which files have been changed or staged
```
```bash
git add . # Stage all changed files for commit
```
```bash 
git add path/to/file.ts # Stage a specific file
```
```bash
git commit -m "feat(login): add basic login test" # Create a new commit with a conventional message ``
```
```bash
git push -u origin main # Push your commits to the remote repository
```
```bash
git pull # Download latest changes from the remote repo 
```
**More will come...TBD**

Conventional Commits to use: 

feat:	`New feature (e.g., feat(auth): add valid login test)`\
fix:	`Bug fix (e.g., fix(login): correct selector for error message)`\
chore:	`Maintenance (e.g., chore: update dependencies)`\
docs:	`Documentation (e.g., docs: update README with Git commands)`\
refactor:	`Code refactoring (e.g., refactor: simplify login method)`\
test:	`Test-only changes (e.g., test: add negative login scenario)`\
style:	`Code style changes (formatting, spacing, etc.)`\

**More will come...TBD**



## Files to understand

package.json - `Defines project dependencies, scripts, and metadata. Used by npm/yarn to install required packages like Playwright, ESLint, etc.`\
config.ts - `Contains reusable configuration values such as URLs, environment variables, or test settings. Centralizes setup data for consistency.`\
tsconfig.json - `TypeScript configuration file – specifies compiler options, file inclusion/exclusion rules, and module resolution settings.`\
playwright.config.ts - `Main configuration for Playwright – sets global test options like base URL, timeouts, retries, reporter settings, and project structure.`


## Important to remember
TBD


_____
Created by Adam Wudarczyk for learning purposes