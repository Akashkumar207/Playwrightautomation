
const { test, expect } = require('@playwright/test');

test('Table test', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    // const tableRows = await page.$$('//table[@name="BookTable"]//tr');
    // const rowCount = tableRows.length;
    // console.log("Total number of rows in the table: " + rowCount);

    // Static Table Header count
    const headerNumbers = await page.locator('thead tr th')
    const headerCountStatic = await headerNumbers.count()
    console.log("Total number of headers in the table: " + headerCountStatic);

    // Dynamic  Table Header count
    const tableHeaders = await page.locator('thead tr th');
    const headerCount = await tableHeaders.count();
    console.log("Total number of headers in the table: " + headerCount);



})
