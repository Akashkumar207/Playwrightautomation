const { test, expect } = require('@playwright/test');

test('Date picker test', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

})
    // click on the date picker input field
