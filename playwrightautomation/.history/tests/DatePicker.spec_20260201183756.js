const { test, expect } = require('@playwright/test');

test('Date Picker', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  // Date you want
  const year = '2024';
  const month = 'March';
  const date = '20';

  // Open calendar
  await page.click('#datepicker');

  // Navigate to correct month & year
  while (true) {
    const currentYear = await page.locator('.ui-datepicker-year').textContent();
    const currentMonth = await page.locator('.ui-datepicker-month').textContent();

    if (currentYear === year && currentMonth === month) {
      break;
    }

    await page.locator('[title="Next"]').click();
  }

  // Select date (BEST PRACTICE)
  const dates = page.locator('.ui-datepicker-calendar td a');

  const count = await dates.count();
  for (let i = 0; i < count; i++) {
    if ((await dates.nth(i).textContent()) === date) {
      await dates.nth(i).click();
      break;
    }
  }
});
