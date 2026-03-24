const { test, expect } = require('@playwright/test')
test('Assertion',async ({page})=>{

  await page.goto("hhttps://www.nopcommerce.com/en/register?returnUrl=%2Fen")
  
  await expect(page).toHaveURL("hhttps://www.nopcommerce.com/en/register?returnUrl=%2Fen")

})
