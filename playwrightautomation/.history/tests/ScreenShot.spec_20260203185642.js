const { test, expect } = require('@playwright/test');

test('ScreenShot test', async ({ page }) => {

    await page.goto('https://demo.opencart.com/');


})