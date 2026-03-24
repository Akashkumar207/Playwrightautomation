
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


    const year = '2024';
    const month = 'March';
    const day = '20';


    // Open the date picker calendar
    await datePicker.click();

    while (true) {
        // Get the currently displayed month and year from the date picker header
        const displayedMonthYear = await page.locator('.ui-datepicker-year').textContent();
        const displayedMonth = await page.locator('.ui-datepicker-month').textContent();
        // Check if the displayed month and year match the desired month and year

        if (displayedMonth === month && displayedMonthYear === year) {
            break; // Desired month and year found, exit the loop
        } else {
            // Click the "Next" button to navigate to the next month
            await page.locator('[title="Next"]').click();


        }}
})
