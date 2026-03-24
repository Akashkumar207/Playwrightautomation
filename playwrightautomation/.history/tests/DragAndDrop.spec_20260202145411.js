const { test, expect } = require('@playwright/test');

test('Handle dropdowns', async ({ page }) => {

  await page.goto('http://localhost:8888/');

})
