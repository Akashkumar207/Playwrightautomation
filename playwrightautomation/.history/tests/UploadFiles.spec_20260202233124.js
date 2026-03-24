const { test, expect } = require('@playwright/test');
const path = require('path');

test('Multiple file upload test', async ({ page }) => {

  // Open demo page
  await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    const uploadfile= await page.locator("#filesToUpload")
    await  uploadfile.setInputFiles("tests\AmanQANewCV (1).pdf")

  

})
