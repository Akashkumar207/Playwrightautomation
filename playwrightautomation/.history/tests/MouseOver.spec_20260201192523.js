
   const {test,expect}=require('@playwright/test')

   test('Mouse Over Test',async({page})=>{

     await page.goto('https://demo.opencart.com/')
     const desktopsLink = await page.locator('//a[text()="Desktops"]');

     await desktopsLink.hover();

      const macLink = await page.locator('//a[text()="Mac (1)"]');
      await macLink.hover()

        // const macText= await page.locator('//h2[text()="Mac"]').textContent()
        // console.log("Selected Text is: "+macText)
        // expect(macText).toBe("Mac")


   })
