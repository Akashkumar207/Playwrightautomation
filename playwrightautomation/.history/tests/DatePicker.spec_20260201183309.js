 const {test,expect}= require('@playwright/test')

 test('Date picker test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const year = '2024';
  const month = 'March';
  const day = '20';

  await page.click('#datepicker');

  while (true) {
    const currentYear = (await page.locator('.ui-datepicker-year').textContent())?.trim();
    const currentMonth = (await page.locator('.ui-datepicker-month').textContent())?.trim();

    if (currentYear === year && currentMonth === month) {
      break;
    }

    await page.locator('[title="Next"]').click();
  }

  // select day ONLY after correct month/year is visible
  await page
    .locator('.ui-datepicker-calendar a.ui-state-default', { hasText: day })
    .first()
    .click();
});

