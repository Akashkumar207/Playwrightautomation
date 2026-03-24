import { test, expect } from '@playwright/test';

test('Auto suggestion dropdown', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.locator(('//input[@name="username"]')).fill('Admin');
  await page.locator(('//input[@name="password"]')).fill('admin123');
  await page.locator('//button[@type="submit"]').click();


  // Click on PIM menu
  await page.locator("//span[normalize-space()='PIM']").click();

  // Click on dropdown field
  await page.locator("//div[@role='combobox']").click();

  // Wait until listbox appears (NO waitForTimeout)
  const options = page.locator("//div[@role='listbox']//span");

  // Wait for at least one option
  await expect(options.first()).toBeVisible();

  // Get count
  const count = await options.count();

  for (let i = 0; i < count; i++) {
    const text = await options.nth(i).textContent();
    console.log(text?.trim());
  }

  // Click specific value
  await options.filter({ hasText: 'QA Engineer' }).click();

});
