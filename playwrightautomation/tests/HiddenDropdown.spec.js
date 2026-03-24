import { test, expect } from '@playwright/test';

test('Auto-suggestion dropdown – select if not selected', async ({ page }) => {

  // 1️⃣ Open application
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // 2️⃣ Login (required for PIM)
  await page.locator("input[name='username']").fill('Admin');
  await page.locator("input[name='password']").fill('admin123');
  await page.locator("button[type='submit']").click();

  // 3️⃣ Open PIM module
  await page.locator("//span[normalize-space()='PIM']").click();

  // 4️⃣ Click Job Title dropdown
  const jobDropdown = page.locator("//label[text()='Job Title']/following::div[@role='combobox'][1]");
  await jobDropdown.click();

  // 5️⃣ Wait for listbox options
  const options = page.locator("//div[@role='listbox']//span");
  await expect(options.first()).toBeVisible();

  const targetOption = 'QA Engineer';
  const option = page.locator(`//div[@role='option']//span[normalize-space()='${targetOption}']`);

  // 6️⃣ Select only if not already selected
  const isSelected = await option.getAttribute('aria-selected');

  if (isSelected !== 'true') {
    await option.click();
    console.log(`${targetOption} selected`);
  } else {
    console.log(`${targetOption} already selected`);
  }

  // 7️⃣ Validate selected value appears in dropdown field
  await expect(jobDropdown).toContainText(targetOption);

});
