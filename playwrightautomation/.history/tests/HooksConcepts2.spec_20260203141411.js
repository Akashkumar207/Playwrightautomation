import { test, expect } from '@playwright/test';

test.beforeEach('Login test', async ({ browser }) => {
   page= await browser.newPage()

   console.log('--- beforeEach: Login ---');
  await page.goto('https://www.demoblaze.com/index.html');

  await page.locator("//a[@id='login2']").click()
  await page.locator("#loginusername").fill('akashpal')
  await page.locator("#loginpassword").fill("akashpal@123#")

  await page.locator("button[onclick='logIn()']").click()

})

  test.afterEach('logout' ,async () => {
 //logout
  await page.locator("#logout2").click()

  })

test('AHome page test', async ({ page }) => {
  const element = page.locator('.hrefch');
  await expect(element).toHaveCount(9);
})


test('Add Product to Car', async ({ page }) => {
  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
  await page.locator("//a[normalize-space()='Add to cart']").click()

  page.on('dialog', async dialog => {

    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()

  })


})