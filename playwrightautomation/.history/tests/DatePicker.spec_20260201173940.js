
const { test, expect } = require('@playwright/test');

test('Date picker test', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    
    // Date picker field locator
    const datePicker = page.locator('#datepicker');
    // Open the date picker calendar
    await datePicker.click();
    // Select a specific date (e.g., 15th of the current month)
    const dateToSelect = page.locator('//table[@class="ui-datepicker-calendar"]//a[text()="15"]');
    await dateToSelect.click();
    // Verify the selected date is populated in the date picker input field
    await expect(datePicker).toHaveValue(/15/);






})
