const { test, expect } = require('@playwright/test');

test('upload file test', async ({ page }) => {

  await page.goto('http://localhost:8888/');

  await page.locator("input[name='user_name']").fill('admin')
  await page.locator("input[name='user_password']").fill('admin')

  await page.locator("#submitButton").click()

})
