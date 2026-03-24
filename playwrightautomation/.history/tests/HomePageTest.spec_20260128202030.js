  const {test, expect} =require('@playwright/test');
  test('Home Page', async ({page}) =>{
    page.goto('https://www.demoblaze.com/');;

  })