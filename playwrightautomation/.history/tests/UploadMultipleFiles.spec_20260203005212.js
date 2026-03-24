const { test, expect } = require('@playwright/test');
const path = require('path');

test('Multiple file upload test', async ({ page, browserName }) => {
  test.skip(browserName === 'webkit', 'WebKit is unstable on Windows');


  // Open demo page
  await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
  await  page.waitForTimeout(5000)

  await page.locator("#filesToUpload").setInputFiles([
  'tests/uploadFiles/JyotiPhoto.png', 
  'tests/uploadFiles/JyotiPic.png'
      await page.waitForTimeout(6000)
]);

  })

