
const { test, expect } = require('@playwright/test');

test('Date picker test', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/')


  const datePicker = await page.locator('#datepicker').click();

  const year = '2024';
  const month = 'March';
  const day = '20';

  await datePicker.click();

  while (true) {

    const displayedMonthYear = await page.locator('.ui-datepicker-year').textContent();
    const displayedMonth = await page.locator('.ui-datepicker-month').textContent();


    if (displayedMonth === month && displayedMonthYear === year) {
      break;
      await page.locator('[title="Next"]').click();


    }
  }
})
