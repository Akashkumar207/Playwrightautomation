 const {test,expect}= require('@playwright/test')
 test('checkboxestest',async({page})=>{
 
   await page.goto('https://testautomationpractice.blogspot.com/')

   //single checkboxes
 const sundaycheckbox= await page.locator('//input[@id="sunday" and @type="checkbox"]')

 const Mondaycheckbox= await page.locator('//input[@id="monday" and @type="checkbox"]')
 sundaycheckbox.check()
 //  await page.check('//input[@id="sunday" and @type="checkbox"]')

   await expect(sundaycheckbox).toBeChecked()
   await expect(Mondaycheckbox).not.toBeChecked()


   //Multiple checkboxex
     const mmultiplecheckboxeslocators = ["//input[@id='thursday' and @type='checkbox']"
      ,"//input[@id='friday' and @type='checkbox']"
      ,"//input[@id='tuesday' and @type='checkbox']"]
      for(const checkboxlocator of mmultiplecheckboxeslocators){
        const checkbox= await page.locator(checkboxlocator)
        await checkbox.check()
        await expect(checkbox).toBeChecked()
      }

   await page.waitForTimeout(5000);


    for(const checkboxlocator of mmultiplecheckboxeslocators){
        const checkbox= await page.locator(checkboxlocator)
        await checkbox.uncheck()
        await expect(checkbox).toBeChecked()
      }



 })