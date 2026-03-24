
const { test, expect } = require('@playwright/test');

test('upload file test', async ({ page }) => {

    await page.goto('http://localhost:8888/')

})
