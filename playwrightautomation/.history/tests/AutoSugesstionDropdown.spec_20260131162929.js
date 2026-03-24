const { test, expect } = require('@playwright/test');

test('Auto suggest dropdown', async ({ page }) => {

  await page.goto('https://www.redbus.in/');

  // Type source city
  await page.locator('#src').fill('Delhi');

  // Wait for auto-suggestion list
  await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]//div[text()]");

  // Capture all suggestions
  const fromCityOptions = await page.$$(
    "//li[contains(@class,'sc-iwsKbI')]//div[text()]"
  );

  // Print all values
  for (let option of fromCityOptions) {
    const value = await option.textContent();
    console.log(value);

    // Select specific city
    if (value.includes('Delhi Airport')) {
      await option.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});
