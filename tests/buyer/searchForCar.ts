import { test, expect } from "@playwright/test";

test("Search for a car", async ({ page }) => {
  test.setTimeout(60_000);

  const response = await page.goto("/en-lt/");

  expect(response?.status()).not.toBe(401);
  await expect(page).toHaveURL(/wecars\.lt/);

  await page.locator("#carMainBrandSelector").selectOption("AIWAYS");
  await page.locator("#carMainModelSelector").selectOption("U5");

  await page
    .locator('button.btn.btn-dark.rounded-3.xyz333[type="submit"]')
    .click({ noWaitAfter: true });
});