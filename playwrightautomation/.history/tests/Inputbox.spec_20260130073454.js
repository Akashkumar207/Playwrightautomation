 const {test,expect}=require('@playwright/test')
test('',async ({page})=>{

  await page.goto('https://qa-dashboard.azurewebsites.net/Identity/Account/Login?ReturnUrl=%2F')
    await page.locator('//input[@id="Input_Email"]').fill('testuser@example.com')
    // 
    
})