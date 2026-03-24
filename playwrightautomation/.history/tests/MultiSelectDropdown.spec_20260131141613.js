const { test, expect } = require('@playwright/test');

test('Handle dropdowns', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const selectedOptions = await page.selectOption('#colors', ['Red', 'Green', 'Blue'])
    console.log('Selected multiple options in multi-select dropdown:', selectedOptions);

    await page.waitForTimeout(5000);



})