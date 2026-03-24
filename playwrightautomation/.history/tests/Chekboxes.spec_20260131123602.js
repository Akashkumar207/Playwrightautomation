 const {test,expect}= require('@playwright/test')
 test('checkboxestest',async({page})=>{
 
   await page.goto('https://testautomationpractice.blogspot.com/')

   //single checkboxes
 const checkbox= await page.locator('//input[@id="sunday" and @type="checkbox"]')
 checkbox.check()
 //  await page.check('//input[@id="sunday" and @type="checkbox"]')

   await expect(checkbox).toBeChecked()

   //multiple checkboxes
   const multiplecheckboxes= await page.locator('//input[@type="checkbox" and contains(@id,"day")]')
   const count= await multiplecheckboxes.count()
   console.log("total checkboxes are:"+count)
   expect(await page.locator('//input[@id="sunday" and @type="checkbox"]')).toBeChecked().toBeTruthy()

   await page.waitForTimeout(2000);
 })