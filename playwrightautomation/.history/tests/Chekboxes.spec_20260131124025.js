const { test, expect } = require('@playwright/test');

test('Handle checkboxes', async ({ page }) => {

  await page.goto('https://itera-qa.azurewebsites.net/home/automation');

  // Locators
  const mondayCheckbox = page.locator("//input[@id='monday' and @type='checkbox']");
  const sundayCheckbox = page.locator("//input[@id='sunday' and @type='checkbox']");

  // Check Monday checkbox
  await mondayCheckbox.check();

  // Assertions (CORRECT WAY)
  await expect(mondayCheckbox).toBeChecked();
  await expect(sundayCheckbox).not.toBeChecked(); // optional validation

  await page.waitForTimeout(5000);
});
