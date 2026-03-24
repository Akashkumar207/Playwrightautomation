const { test, expect } = require('@playwright/test');

test('Login test', async ({ page }) => {

    console.log('--- beforeEach: Login ---');
    await page.goto('https://www.demoblaze.com/index.html');

 await page.locator("//a[@id='login2']").click()
 await page.locator("#loginusername").fill('akashpal')
 await page.locator("#loginpassword").fill("akashpal@123#")
 await page.locator("button[onclick='logIn()']").click()

  console.log('--- beforeEach: Login ---');

});


// Test 2
test('Add Product to Cart', async ({ page }) => {
    await page.click('#add-to-cart');
    await expect(page.locator('#cart')).toContainText('1 item');
});
