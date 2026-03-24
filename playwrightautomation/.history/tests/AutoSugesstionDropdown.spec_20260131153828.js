const { test, expect } = require('@playwright/test');

test('AssertionsTest', async ({ page }) => {

  // Open URL
  await page.goto('https://www.redbus.in/');

})
