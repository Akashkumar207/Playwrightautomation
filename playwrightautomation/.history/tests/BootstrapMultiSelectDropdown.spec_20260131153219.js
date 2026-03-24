const { test, expect } = require('@playwright/test');

test('Bootstrap dropdown', async ({ page }) => {

  await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

  // click on the bootstrap multiselect dropdown
  await page.locator('.multiselect').click();

  // ===============================
  // Verify total options count
  // ===============================
  const options = await page.$$('ul > li label input');
  await expect(options.length).toBe(11);

  // ===============================
  // Select specific options
  // ===============================
  const labels = await page.$$('ul > li label');

  for (let option of labels) {
    const value = await option.textContent();

    if (
      value.includes('Angular') ||
      value.includes('Java') ||
      value.includes('MySQL')
    ) {
      await option.click();
    }
  }

  await page.waitForTimeout(5000);
});
