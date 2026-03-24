const { test, expect } = require('@playwright/test');

test('AssertionsTest', async ({ page }) => {

  // Open application URL
  await page.goto('https://demo.nopcommerce.com/register');

  // --- Page URL Assertion ---
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

  // --- Page Title Assertion ---
  await expect(page).toHaveTitle('nopCommerce demo store. Register');

  // --- Logo Visible ---
  await expect(page.locator('.header-logo')).toBeVisible();

  // --- Search box is enabled ---
  const searchElement = page.locator('#small-searchterms');
  await expect(searchElement).toBeEnabled();

  // --- Newsletter checkbox default state ---
  // On nopCommerce, Newsletter is NOT checked by default
//   await expect(page.locator('#Newsletter')).not.toBeChecked();

  // --- Gender radio button default state ---
  // Male is checked by default
  await expect(page.locator('#gender-male')).toBeChecked();

  // --- Register button visible ---
  await expect(page.locator('#register-button')).toBeVisible();

  // --- Example Negative Assertion ---
  await expect(page.locator('#register-button')).toBeDisabled();

});
