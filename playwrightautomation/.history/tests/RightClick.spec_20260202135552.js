const { test, expect } = require('@playwright/test');

test('Mouse Right Click', async ({ page }) => {

  await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

  // locate right click button
  const button = page.locator('//span[normalize-space()="right click me"]');

  // right click action
  await button.click({ button: 'right' });

  await page.waitForTimeout(5000);
});
