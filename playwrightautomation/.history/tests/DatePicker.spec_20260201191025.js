const { test, expect } = require('@playwright/test');

test('Date Picker Selection', async ({ page }) => {

  // 1️⃣ Open application
  await page.goto('https://testautomationpractice.blogspot.com/');

  // 2️⃣ Desired date values
  const year = "2022";
  const month = "March";
  const date = "15";

  // 3️⃣ Open date picker
  await page.click('#datepicker');

  // 4️⃣ Loop until required month & year is visible
  while (true) {

    // Get current year from date picker
    const currentYear = await page.locator('.ui-datepicker-year').textContent();

    // Get current month from date picker
    const currentMonth = await page.locator('.ui-datepicker-month').textContent();

    // Trim values (important)
    if (currentYear.trim() === year && currentMonth.trim() === month) {
      break;
    }

    // Click Next button
    await page.locator('[title="Next"]').click();
  }

  // 5️⃣ Select the date (WITHOUT loop – best approach)
  await page.click(`//a[@class='ui-state-default' and text()='${date}']`);

  // 6️⃣ Validation (optional)
  const selectedDate = await page.inputValue('#datepicker');
  console.log("Selected Date:", selectedDate);

  await page.waitForTimeout(3000);
});
