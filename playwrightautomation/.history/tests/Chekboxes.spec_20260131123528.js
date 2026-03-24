 const {test,expect}= require('@playwright/test')
 test('checkboxestest',async({page})=>{
 
   await page.goto('https://testautomationpractice.blogspot.com/')

   //single checkboxes
 const checkbox= await page.locator('//input[@id="sunday" and @type="checkbox"]')
 checkbox.check()
 //  await page.check('//input[@id="sunday" and @type="checkbox"]')

    
   expect(await page.locator('//input[@id="sunday" and @type="checkbox"]')).toBeChecked().toBeTruthy()

   await page.waitForTimeout(2000);
 })