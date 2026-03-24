const { test, expect } = require('@playwright/test');

test('Frames handling test – complete', async ({ page }) => {

    // Open Frames page
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const allframes = await page.frames()
    console.log("Total frames are :" + allframes.length)

    const frame3 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });
   await frame3.locator('input[type="text"]').fill('Akash pal');
    // await page.waitForTimeout(5000);
    // await frame1.locator('input[type="text"]').fill('Rahul sir');

})