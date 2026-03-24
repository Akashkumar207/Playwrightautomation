 const {test,expect}= require('@playwright/test')
 test('checkboxestest',async({page})=>{
 
   await page.goto('https://testautomationpractice.blogspot.com/')

   //single checkboxes
  await page.locator('//input[@id="sunday" and @type="checkbox"]').check()
 //  await page.check('//input[@id="sunday" and @type="checkbox"]')

    
   expect(await page.locator('//input[@id="sunday" and @type="checkbox"]')).toBeChecked()
   expect(await page.locator('//input[@id="sunday" and @type="checkbox"]')).ischecked().tobe(true)
 })