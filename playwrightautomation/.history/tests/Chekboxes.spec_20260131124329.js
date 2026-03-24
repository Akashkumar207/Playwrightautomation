 const {test,expect}= require('@playwright/test')
 test('checkboxestest',async({page})=>{
 
   await page.goto('https://testautomationpractice.blogspot.com/')

   //single checkboxes
 const sundaycheckbox= await page.locator('//input[@id="sunday" and @type="checkbox"]')

 const Mondaycheckbox= await page.locator('//input[@id="monday" and @type="checkbox"]')
 checkbox.check()
 //  await page.check('//input[@id="sunday" and @type="checkbox"]')

   await expect(sundaycheckbox).toBeChecked()
   await expect(Mondaycheckbox).not.toBeChecked()

   await page.waitForTimeout(2000);
   
 })