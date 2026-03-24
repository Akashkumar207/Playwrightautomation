const { test, expect } = require('@playwright/test');
const path = require('path');

test('Multiple file upload test', async ({ page }) => {

  // Open demo page
  await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    const uploadfile= await page.locator("#filesToUpload")
    //await  uploadfile.setInputFiles("tests\Er.AkashQA.jpeg")

   // await page.locator('#file-upload').setInputFiles('uploadFiles/testfile.pdf');

    await page.locator('#filesToUpload').setInputFiles('tests/Er.AkashQA.jpeg');

    // c:\Users\DELL\Downloads\Er.AkashQA.jpeg

// tests/uploadFiles
  

})
