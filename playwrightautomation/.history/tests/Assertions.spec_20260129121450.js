const { test, expect } = require('@playwright/test')
test('Assertion',async ({page})=>{
  await page.goto("https://www.demoblaze.com/index.html")
})
