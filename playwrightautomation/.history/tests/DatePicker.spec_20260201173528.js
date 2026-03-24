import { test, expect } from '@playwright/test';


test('Date picker test', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

})
    // click on the date picker input field

    page.locator('#datepicker').click();
     await page.locator('#datepicker').fill('02/01/2026')



    // select a date from the date picker
    // await page.locator('.ui-datepicker-calendar tbody tr:nth-child(3) td:nth-child(5) a').click();
