const { test, expect } = require('@playwright/test');

test('SoftAssertionsTest', async ({ page }) => {

    // Navigate to correct site
    await page.goto('https://demo.nopcommerce.com/index.html');

    // Correct title as per actual page
    await expect(page).toHaveTitle(/nopCommerce demo store/i);

    // Correct URL check
    await expect(page).toHaveURL('https://demo.nopcommerce.com/');

    // Check visibility of logo
    await expect(page.locator('.navbar-brand')).toBeVisible();

});
