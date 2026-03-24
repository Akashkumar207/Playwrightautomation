const { test, expect } = require('@playwright/test');

test.only('Page ScreenShot test', async ({ page }) => {

await page.goto('https://demo.opencart.com/');

await page.screenshot({ path: 'tests\ScreenShots/'+Date.now+ 'HomePage.png' });



})

test('Full ScreenShot test', async ({ page }) => {

})

test('Element ScreenShot test', async ({ page }) => {

})