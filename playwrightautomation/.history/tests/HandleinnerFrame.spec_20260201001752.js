const { test, expect } = require('@playwright/test');

test('Frames handling test – complete', async ({ page }) => {

    // Open Frames page
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const allframes = await page.frames()
    console.log("Total frames are :" + allframes.length)

})