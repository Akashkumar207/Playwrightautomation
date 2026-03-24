const { test, expect } = require('@playwright/test');

test.only('Page ScreenShot test', async ({ page }) => {

await page.goto('https://demo.guru99.com/');

await page.screenshot({ path: 'tests/ScreenShots/'+Date.now+ 'HomePage.png'});



})

test('Full ScreenShot test', async ({ page }) => {
await page.goto('https://demo.guru99.com/');

 await page.screenshot({ path: 'tests/ScreenShots/'+Date.now+ 'HomePage.png',fullPage:true});


})

test.only('Element ScreenShot test', async ({ page }) => {

     await page.goto('https://demo.guru99.com/')
   await page.locator("//h2[normalize-space()='Guru99 Bank']").screenshot({ path: 'tests/ScreenShots/' + Date.now() + 'Guru99.png' });




})