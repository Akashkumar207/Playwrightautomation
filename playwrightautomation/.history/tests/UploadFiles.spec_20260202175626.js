const { test, expect } = require('@playwright/test');

test('upload file test', async ({ page }) => {

  await page.goto('http://localhost:8888/');

  await page.locator("input[name='user_name']").fill('admin')
  await page.locator("input[name='user_password']").fill('admin')

  await page.locator("#submitButton").click()

  await page.waitForTimeout(5000)

  await page.locator("//a[@href='index.php?module=Leads&action=index']").click()
  await page.locator("img[title='Import Leads']").click()


const filePath = await path.resolve("tests/AmanQAnewCV (1).pdf");

await page.locator("//input[@id='import_file']").setInputFiles(filePath);
  

})
