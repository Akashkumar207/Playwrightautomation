
const { test, expect } = require('@playwright/test');

test('Table test', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    // const tableRows = await page.$$('//table[@name="BookTable"]//tr');
    // const rowCount = tableRows.length;
    // console.log("Total number of rows in the table: " + rowCount);

    // Static Table Header count
    const headerNumbers = await page.locator('tbody tr th')
    const staticheadercount = await headerNumbers.count()
    console.log("Total number of  headerCountStatic in the table: " + staticheadercount);

    // Dynamic  Table Header count
    const tableHeaders = await page.locator('thead tr th');
    const dynamicheadercount = await tableHeaders.count();
    console.log("Total number of headerCount in the table: " + dynamicheadercount);



})
