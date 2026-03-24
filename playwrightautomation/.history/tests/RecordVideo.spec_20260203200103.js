const { test, expect } = require('@playwright/test');

test('Record test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    
    await page.locator("//a[text()='Log in']").click()
    await page.locator("#loginusername").fill('akashpal')
    await page.locator("#loginpassword").fill("akashpal@123#")

    await page.locator("//button[@onclick='logIn()']").click()
    await expect(page.locator("//a[text()='Log out']")).toBeVisible()


    await page.waitForTimeout(5000)


})
