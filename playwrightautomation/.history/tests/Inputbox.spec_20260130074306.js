 const {test,expect}=require('@playwright/test')
test('',async ({page})=>{


  await page.goto('https://qa-dashboard.azurewebsites.net/Identity/Account/Login?ReturnUrl=%2F')
  
  await expect(emailInput).toBeVisible()
    await expect(emailInput).toBeEnabled()
    await expect(emailInput).toBeEditable() 
    await expect(emailInput).toBeEmpty()

    await page.waitForTimeout(3000)
   const emailInput= page.locator('//input[@id="Input_Email"]')


})