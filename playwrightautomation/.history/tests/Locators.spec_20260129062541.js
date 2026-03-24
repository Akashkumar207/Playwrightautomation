

   // const {test,expect}=require('@playwright/test')
    import {test, expect} from 'playwright';

    test('Locators ', async ({page}) => {
     page.goto('https://www.demoblaze.com/index.html')
    })