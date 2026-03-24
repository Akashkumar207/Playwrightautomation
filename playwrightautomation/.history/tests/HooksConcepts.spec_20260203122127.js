import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {

    console.log('--- beforeEach: Login ---');
    await page.goto('https://www.demoblaze.com/index.html');

 await page.locator("//a[@id='login2']").click()
 await page.locator("#loginusername").fill('akashpal')
 await page.locator("#loginpassword").fill("akashpal@123#")

 await page.locator("button[onclick='logIn()']").click()

  console.log('--- beforeEach: Login ---');
    const element = page.locator('.hrefch');
await expect(element).toHaveCount(9);


//logout
 await page.locator("#logout2").click()

 await page.waitForTimeout(600)

});


test('Add Product to Cart', async ({ page }) => {
      //login test
  await page.goto('https://www.demoblaze.com/index.html');

 await page.locator("//a[@id='login2']").click()
 await page.locator("#loginusername").fill('akashpal')
 await page.locator("#loginpassword").fill("akashpal@123#")

 await page.locator("button[onclick='logIn()']").click()
 await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
 await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()

  await expect(page.textContent("Product added."))

 
 
})