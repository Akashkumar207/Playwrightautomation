const { test, expect } = require('@playwright/test');
const path = require('path');

test('Multiple file upload test', async ({ page, browserName }) => {
  test.skip(browserName === 'webkit', 'WebKit is unstable on Windows');


  // Open demo page
  await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
  await page.waitForTimeout(5000)

  await page.locator("#filesToUpload").setInputFiles([
    'tests/uploadFiles/JyotiPhoto.png',
    'tests/uploadFiles/JyotiPic.png'])
  await page.waitForTimeout(6000);


  await expect(page.locator("//li[normalize-space()='JyotiPic.png']")).toHaveText('JyotiPhoto.png')
  await expect(page.locator("//li[normalize-space()='JyotiPhoto.png']")).toHaveText('JyotiPic.png')
  
  await page.locator("//li[normalize-space()='No Files Selected']").setInputFiles([])

  await page.waitForTimeout(6000);
    await expect(page.locator("#fileList")).toHaveText('No Files Selected')


})

