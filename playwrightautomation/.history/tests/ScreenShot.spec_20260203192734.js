const { test, expect } = require('@playwright/test');

test('Page ScreenShot test', async ({ page }) => {

await page.goto('https://demo.opencart.com/');

await page.screenshot({ path: 'tests/ScreenShots/'+Date.now+ 'HomePage.png'});



})

test('Full ScreenShot test', async ({ page }) => {
await page.goto('https://demo.opencart.com/');

await page.screenshot({ path: 'tests/ScreenShots/'+Date.now+ 'HomePage.png',fullPage:true});


})

test.only('Element ScreenShot test', async ({ page }) => {
    
     await page.goto('https://demo.opencart.com/');
   await page.locator("//a[normalize-space()='MacBook']").screenshot({ path: 'tests/ScreenShots/' + Date.now() + '_Macbook.png' });




})