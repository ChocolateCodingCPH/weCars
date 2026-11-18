# weCars

Browser test automation for the weCars project using Playwright.

## Setup

1. Install dependencies:

   ```cmd
   npm install
   ```

2. Install the Playwright browser:

   ```cmd
   npx playwright install chromium
   ```

3. Copy `.env.example` to `.env` and update values when needed:

   ```cmd
   copy .env.example .env
   ```

## Run tests

Run the complete test suite:

```cmd
npm test
```

Run tests in headed mode:

```cmd
npm run test:headed
```

Run a specific test file:

```cmd
npx playwright test tests\login\login.ts
```

Open the HTML test report:

```cmd
npm run test:report
```

## Basic CMD commands

Navigate to the project:

```cmd
cd C:\Users\fabia\tests\weCars\weCars
```

List project files:

```cmd
dir
```

Check Git changes:

```cmd
git status
```

The test suite is organized under `tests/buyer`, `tests/seller`, and `tests/login`.
