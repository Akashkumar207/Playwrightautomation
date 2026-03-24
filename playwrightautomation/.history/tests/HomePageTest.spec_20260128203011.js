  const {test, expect} =require('@playwright/test');
  test('Home Page', async ({page}) =>{
    await page.goto('https://www.demoblaze.com/');

      const title= page.title();
      console.log('tilte is :'+title)

      await  expect(page).toHaveTitle("STORE");

     consturl= page.url();
      console.log('url is :'+page.url())

      await expect(page).toHaveURL('https://www.demoblaze.com/');
      await page.close();
      })