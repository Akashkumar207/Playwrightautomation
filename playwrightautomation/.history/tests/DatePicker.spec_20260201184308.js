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

 // get all date elements using locator (IMPORTANT FIX)
const dates = page.locator('.ui-state-default');

// date selection using loop
const count = await dates.count();

for (let i = 0; i < count; i++) {
  const dt = dates.nth(i);

  if ((await dt.textContent()) === date) {
    await dt.click();
    break;
  }
}

// optional wait (as in your screenshot)
await page.waitForTimeout(3000);

});
