const { test, expect } = require('@playwright/test');

test('Keyboard Actions test', async ({ page }) => {

//   await page.goto('http://localhost:8888/');

//   await page.locator("input[name='user_name']").fill('admin')
//   await page.locator("input[name='user_password']").fill('admin')

//   await page.locator("#submitButton").click()

// await page.keyboard.press('Control+A'); // Select all text
// await page.keyboard.press('Control+C'); // Copy text
// await page.keyboard.press('Control+V');
    await page.goto("https://gotranscript.com/text-compare")

      const copyelement= await page.locator("textarea[placeholder='Paste one version of the text here.']")
    await copyelement.fill('hello my dear friend where are you')
   await  page.keyboard.press('Control+A');
   await page.keyboard.press('Control+C');

  const pastelement =  awaitpage.locator("textarea[placeholder='Paste another version of the text here.']")
   await page.keyboard.press('Control+V');






  })