
   // const {test,expect}=require('@playwright/test')
    import {test, expect} from 'playwright';

   test('Locators ',async ({page}) => {
      await page.goto('https://www.demoblaze.com/index.html')
      //click on login button
      // await page.locator('#login2').click()
      await page.click('#login2')
     
     await page.log('clicked on login button')
     //provide usermane
     await page.locator('#loginusername').fill('akashpal')
     //provide password
      await page.fill('#loginpassword', 'akashpal@123#');

      await page.locator("button[onclick='logIn()']").click()
    })