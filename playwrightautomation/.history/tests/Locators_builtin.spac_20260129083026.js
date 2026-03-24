//const { expect } = require('@playwright/test');

 const {test,expect} =require('@playwright/test')
 test('Locators_builtin',async ({page})=>{
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   //click on login button
   const alttext=  awaitpage.getByAltText('company-branding');

  await expect(alttext).toBeVisible();

 })