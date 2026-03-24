const { test, expect } = require('@playwright/test');

test('Handle dropdowns', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const selectedOptions = await page.selectOption('#colors', ['Red', 'Green', 'Blue'])
    console.log('Selected multiple options in multi-select dropdown:', selectedOptions);


    //check the numbers of dropdown optins
    const options = page.locator('#colors option');
    await expect(options).toHaveCount(9);


    

 // Assetions

    await page.waitForTimeout(5000);



})