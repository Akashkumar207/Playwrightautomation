const { test, expect } = require('@playwright/test');

test('Bootstrap dropdown', async ({ page }) => {

  await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

  // click on the bootstrap multiselect dropdown
  await page.locator('.multiselect').click();

  // ===== Approach 1 : Using locator + assertion =====
  // const options = await page.locator('ul > li label input');
  // await expect(options).toHaveCount(11);

  // ===== Approach 2 : Using page.$$ =====
  const options = await page.$$('ul > li label input');
  await expect(options.length).toBe(11);

  await page.waitForTimeout(5000);
});
