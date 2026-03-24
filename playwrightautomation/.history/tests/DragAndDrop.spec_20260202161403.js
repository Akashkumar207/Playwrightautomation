const { test, expect } = require('@playwright/test');

test('Drad and drop test', async ({ page }) => {

  await page.goto('http://localhost:8888/');

  await page.locator("input[name='user_name']").fill('admin')
  await page.locator("input[name='user_password']").fill('admin')

  await page.locator("#submitButton").click()
  const drag= await page.locator("#headerrow_14");
  const  drop=await page.locator("#headerrow_13")

  await drag.dragTo(drop)
  
  await waitForTimeout(5000)
 

})
