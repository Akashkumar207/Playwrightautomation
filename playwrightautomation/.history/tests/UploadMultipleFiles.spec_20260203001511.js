const { test, expect } = require('@playwright/test');
const path = require('path');

test('Multiple file upload test', async ({ page }) => {

  // Open demo page
  await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

  await page.locator("#filesToUpload").setInputFiles(['tests/Er.AkashQA.jpeg',
                                                      'test/AmanBhaiyaPhoto.jpeg'])


  tests
  // Upload multiple files
  await page.locator("input[type='file']").setInputFiles([
    file1,
    file2
  ]);

  // Validate uploaded file names
  await expect(page.locator('#fileList')).toContainText('file1.pdf');
  await expect(page.locator('#fileList')).toContainText('file2.png');
});
