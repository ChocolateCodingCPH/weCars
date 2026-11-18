import { test, expect } from "@playwright/test";

test("Authorize access to weCars", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.ok()).toBe(true);
  await expect(page).toHaveURL(/wecars\.lt/);
});
