const { test, expect } = require('@playwright/test');

test('SoftAssertionsTest', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    await page.locator("//a[text()='Log in']").click()
    await page.locator("#loginusername").fill('akashpal')
    await page.locator("#loginpassword").fill("akashpal@123#")
    await page.locator("//a[text()='Log in']").click()

    await page.waitForTimeout(5000)


})
