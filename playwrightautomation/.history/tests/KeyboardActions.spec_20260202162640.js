
  const {test, expect} =require('@playwright/test');
  test('Home Page', async ({page}) =>{
    await page.goto('http://localhost:8888/');

// await page.keyboard.press('Control+A'); // Select all text
// await page.keyboard.press('Control+C'); // Copy text
// await page.keyboard.press('Control+V');

  })