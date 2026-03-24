
const { test, expect } = require('@playwright/test');

test('Alert test', async ({ page }) => {

    // Open URL
    await page.goto('https://testautomationpractice.blogspot.com/');

    //enable handling alert
    await page.on('dialog', async dialog => {
        await expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();

    })
    //click on alert button
    


})

