const { test, expect } = require('@playwright/test');

test('Double click test', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const dblclick = await page.locator("//button[normalize-space()='Copy Text']")
    dblclick.dblclick()

    const field2 = await page.locator("//input[@id='field2']")

    await expect(field2).toHaveValue('Hello World!')


})