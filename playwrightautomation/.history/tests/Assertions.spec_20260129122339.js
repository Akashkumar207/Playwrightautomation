const { test, expect } = require('@playwright/test')

test('AssertionsTest', async ({ page }) => {

  // open app url
  await page.goto('https://demo.nopcommerce.com/register')

  // verify page URL
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

})

