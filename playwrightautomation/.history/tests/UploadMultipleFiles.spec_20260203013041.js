const { test, expect } = require('@playwright/test');

test('Multiple file upload test', async ({ page, browserName }) => {
  test.skip(browserName === 'webkit', 'WebKit is unstable on Windows');

  // Open demo page
  await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

  // Upload multiple files
  await page.locator('#filesToUpload').setInputFiles([
    'tests/uploadFiles/JyotiPhoto.png',
    'tests/uploadFiles/JyotiPic.png'
  ]);

  // Assert uploaded files (BEST PRACTICE)
  await expect(page.locator('#fileList li')).toHaveText([
    'JyotiPhoto.png',
    'JyotiPic.png'
  ]);

  // ✅ Clear uploaded files (CORRECT)
  await page.locator('#filesToUpload').setInputFiles([]);

  // Assert cleared state
  await expect(page.locator('#fileList')).toHaveText('No Files Selected');
});
