 const {test,expect}= require('@playwright/test')
 test('checkboxestest',async({page})=>{
 
   await page.goto('https://testautomationpractice.blogspot.com/')

   //single checkboxes
  await page.locator('//input[@id="sunday" and @type="checkbox"]').check()
   await page.check('//input[@id="sunday" and @type="checkbox"]')

  const checked= page.locator('//input[@id="sunday" and @type="checkbox"]')
    console.log('sunday checkbox checked status is:',checked)
    
    expect( page.locator('//input[@id="sunday" and @type="checkbox"]')).toBeChecked()
   
 })