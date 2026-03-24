const {test,expect}=require('@playwright/test')
test('Radiooptionstest',async ({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com/')
  await expect(page.screenshot()).toMatchSnapshot('radiooptions.png')

})