const {test,expect}=require('@playwright/test')
test('Radiooptionstest',async ({page})=>{
 

   await page.goto('https://testautomationpractice.blogspot.com/')
    const title= await page.locator('h1[class="title"]')
    title.scrollIntoViewIfNeeded
    
  


})