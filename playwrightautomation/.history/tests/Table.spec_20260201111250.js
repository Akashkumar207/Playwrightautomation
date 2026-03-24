
const { test, expect } = require('@playwright/test');

test('Table test', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    // const tableRows = await page.$$('//table[@name="BookTable"]//tr');
    // const rowCount = tableRows.length;
    // console.log("Total number of rows in the table: " + rowCount);


     const headerNumbers= await page.locator('thead tr th')
     await headerNumbers.count()
     console.log("Total number of headers in the table: " + headerNumbers);
     

     const tableHeaders = await page.locator('thead tr th');
     const headerCount = await tableHeaders.count();
     console.log("Total number of headers in the table: " + headerCount);

    

})
