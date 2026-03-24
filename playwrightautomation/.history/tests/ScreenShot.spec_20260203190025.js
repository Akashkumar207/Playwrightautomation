const { test, expect } = require('@playwright/test');

test('Page ScreenShot test', async ({ page }) => {

await page.goto('https://demo.opencart.com/');

await page.screenshot({ path: 'HomePage.png' });



})

test('Full ScreenShot test', async ({ page }) => {

})

test('Element ScreenShot test', async ({ page }) => {

})