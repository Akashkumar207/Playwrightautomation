const { test, expect } = require('@playwright/test');

test('Handle dropdowns', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  // 🔽 Multiple ways to select option from dropdown

  // 1️⃣ By visible text (label)
  // await page.locator('#country').selectOption({ label: 'India' });

  // 2️⃣ By visible text (string)
  // await page.locator('#country').selectOption('India');

  // 3️⃣ By value
  // await page.locator('#country').selectOption({ value: 'uk' });

  // 4️⃣ By index
  await page.locator('#country').selectOption({ index: 1 });

  // ✅ Assertions

  // Approach 1: Check number of options in dropdown
  const options = page.locator('#country option');
  await expect(options).toHaveCount(10);

  await page.waitForTimeout(5000);
});
