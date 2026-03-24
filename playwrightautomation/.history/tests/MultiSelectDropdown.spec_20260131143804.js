const { test, expect } = require('@playwright/test');

test('Handle dropdowns', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const selectedOptions = await page.selectOption('#colors', ['Red', 'Green', 'Blue'])
    console.log('Selected multiple options in multi-select dropdown:', selectedOptions);


    //check the numbers of dropdown optins with toHaveCount funtion
    const options = page.locator('#colors option');
    await expect(options).toHaveCount(7);

    //check the numbers of dropdown optins  with toBe function
    const allOptions = await page.$$('#colors option');
    console.log('Total options in multi-select dropdown:', allOptions.length);
    expect(allOptions.length).toBe(7);


    // Check presence of element in multi-select dropdown options
    const textContent = await page.locator('#colors').textContent();
    console.log('Multi-select dropdown options text content:', textContent);
    await expect(textContent.includes('Green')).toBeTruthy();


    // Check presence of value in multi-select dropdown options
    const dropdownText = await page.$$('#colors option')
    let isValuePresent = false;
    for (const option of dropdownText) {
        console.log('Option value:', await option.getAttribute('value'));
        const value = await option.getAttribute('value');
        if (value === 'Green') {
            isValuePresent = true;
            break;
        }
    // Assetions

    await page.waitForTimeout(5000);



})