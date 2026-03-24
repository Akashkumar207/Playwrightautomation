//const { expect } = require('@playwright/test');

 const {test,expect} =require('@playwright/test')
 test('Locators_builtin',async ({page})=>{
   await page.goto('https://opensource-demo.orangehrmlive.com/')
   //click on login button
   await page.locator('#login2').click()



 })