
const { test, expect } = require('@playwright/test');

test('Date picker test', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/')
  
  const year = '2024';
  const month = 'March';
  const day = '20';

await page.click('#datepicker');

  while (true) {

    const currenthYear = await page.locator('.ui-datepicker-year').textContent();
    const currentMonth = await page.locator('.ui-datepicker-month').textContent();


    if (currenthYear === year && currentMonth === month) {
      break;

    } else {
      await page.locator('[title="Next"]').click();

      page.$$("//a[@class='ui-state-default']")
      const dates = await page.$$('//a[@class="ui-state-default"]');
      for (const date of dates) {
        
        const dateText = await date.textContent();
        if (dateText === day) {
          await date.click();
          break;
        }
      }
      // ')


    }
  }
})
