const { test, expect } = require('@playwright/test');

test('Page ScreenShot test', async ({ page }) => {

await page.goto('https://demo.opencart.com/');

await page.screenshot({ path: 'tests/ScreenShots/'+Date.now+ 'HomePage.png'});



})

test.only('Full ScreenShot test', async ({ page }) => {
await page.goto('https://demo.opencart.com/');

await page.screenshot({ path: 'tests/ScreenShots/'+Date.now+ 'HomePage.png',fullPage:true});


})

test('Element ScreenShot test', async ({ page }) => {
    await page.goto('https://demo.opencart.com/');

await page.locator("//a[normalize-space()='MacBook']").screenshot({ path: 'tests/ScreenShots/'+Date.now+ 'Macbook.png',});




})