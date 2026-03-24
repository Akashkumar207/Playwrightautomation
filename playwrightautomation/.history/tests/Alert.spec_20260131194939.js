
const { test, expect } = require('@playwright/test');

test.skip('Alert test', async ({ page }) => {

    // Open URL

    await page.goto('https://testautomationpractice.blogspot.com/');

    //enable handling alert
    await page.on('dialog', async dialog => {
        await expect(dialog.type()).toContain('alert')
       await expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();

    })
  //  click on alert button

    await page.locator("//button[text()='Simple Alert']").click()
     await page.waitForTimeout(5000)


})

test.skip('Alert test', async ({ page }) => {

    // Open URL

    await page.goto('https://testautomationpractice.blogspot.com/');

    //enable handling alert
    await page.on('dialog', async dialog => {
        await expect(dialog.type()).toContain('alert')
       await expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();

    })
  //  click on alert button

    await page.locator("//button[text()='Simple Alert']").click()
     await page.waitForTimeout(5000)


})
test('Confirm box test', async ({ page }) => {

    // Open URL
    await page.goto('https://testautomationpractice.blogspot.com/');
    //enable handling confirm box
    await page.on('dialog', async dialog => {
        await expect(dialog.type()).toContain('confirm')
       await expect(dialog.message()).toContain('Press a button!')
        await dialog.dismiss();

    })
    //  click on confirm box button
    await page.locator("//button[text()='Confirm Box']").click()
     await page.waitForTimeout(5000)
})

    
