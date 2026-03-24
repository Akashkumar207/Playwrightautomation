const { test, expect } = require('@playwright/test');

test('handle radio button', async ({ page }) => {

  // Open application
  await page.goto('https://itera-qa.azurewebsites.net/home/automation');

  // Select Male radio button (option2)
  const maleRadio = page.locator("//input[@value='option2']");
  await maleRadio.check();

  // Assertion: Male should be checked
  await expect(maleRadio).toBeChecked();

  // Assertion: Female should NOT be checked
  const femaleRadio = page.locator("//input[@value='option1']");
  await expect(femaleRadio).not.toBeChecked();

  // Pause for observation (optional)
  await page.waitForTimeout(5000);
});
