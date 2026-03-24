const { test, expect } = require('@playwright/test');

test.only('Page ScreenShot test', async ({ page }) => {

await page.goto('https://demo.guru99.com/test');

await page.screenshot({ path: 'tests/ScreenShots/'+Date.now+ 'HomePage.png'});



})

test('Full ScreenShot test', async ({ page }) => {
await page.goto('https://demo.opencart.com/');

await page.screenshot({ path: 'tests/ScreenShots/'+Date.now+ 'HomePage.png',fullPage:true});


})

test.only('Element ScreenShot test', async ({ page }) => {

     await page.goto('https://demo.opencart.com/');
   await page.locator("//a[normalize-space()='MacBook']").screenshot({ path: 'tests/ScreenShots/' + Date.now() + 'Macbook.png' });




})