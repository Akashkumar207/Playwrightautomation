const { test, expect } = require('@playwright/test');

test('Frames handling test – complete', async ({ page }) => {

  // Open Frames page
  await page.goto('https://ui.vision/demo/webtest/frames/');
 const allframes= await page.frame()
    console.log("Total frames are :"+ allframes.length)
    

  /* =========================
     Frame 1 (Top – Yellow)
     ========================= */
  const frame1 = page.frame({ name: 'frame1' });
  await frame1.locator('input[type="text"]').fill('Hello Frame 1');
  await expect(frame1.locator('input')).toHaveValue('Hello Frame 1');

  /* =========================
     Frame 2 (Left – Green)
     ========================= */
  const frame2 = page.frame({ name: 'frame2' });
  await frame2.locator('input[type="text"]').fill('Hello Frame 2');
  await expect(frame2.locator('input')).toHaveValue('Hello Frame 2');

  /* =========================
     Frame 3 (Middle – Blue)
     ========================= */
  const frame3 = page.frame({ name: 'frame3' });
  await frame3.locator('input[type="text"]').fill('Hello Frame 3');
  await expect(frame3.locator('input')).toHaveValue('Hello Frame 3');

  /* =====================================
     Iframe INSIDE Frame 3 (Google Form)
     ===================================== */
  const innerFrame = frame3.childFrames()[0];

  // Example: select first radio option in the form
  await innerFrame
    .locator("div[role='radio']")
    .first()
    .click();

  // Validate something exists inside iframe
  await expect(
    innerFrame.locator("text=Let's start with multiple choice")
  ).toBeVisible();

});
