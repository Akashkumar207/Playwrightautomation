const { test, expect } = require('@playwright/test');

test( 'Hooks concept test',async ({ page }) => {
  console.log('--- beforeEach: Login ---');
  await page.goto('https://example.com/login');
  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password123');
  await page.click('#loginBtn');
});

test.afterEach(async ({ page }) => {
  console.log('--- afterEach: Logout ---');
  await page.click('#logoutBtn');
});

// Test 1
test('Home Page Test', async ({ page }) => {
  await expect(page).toHaveTitle(/Home/);
});

// Test 2
test('Add Product to Cart', async ({ page }) => {
  await page.click('#add-to-cart');
  await expect(page.locator('#cart')).toContainText('1 item');
});
