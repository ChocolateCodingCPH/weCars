# weCars

Browser test automation for the weCars project using Playwright.

## Setup

1. Install dependencies:

   ```powershell
   npm install
   ```

2. Install the Playwright browser:

   ```powershell
   npx playwright install chromium
   ```

3. Copy `.env.example` to `.env` and update values when needed.

## Run tests

```powershell
npm test
```

The test suite is organized under `tests/buyer` and `tests/seller`.
