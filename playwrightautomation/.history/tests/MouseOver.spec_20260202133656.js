const { test, expect }=require('@playwright/test');

test('Mouse hover on Desktops and click Mac', async ({ page }) => {

  await page.goto('https://dribbble.com/tags/mouse-over');
  // Locate the "Desktops" menu item
  const desktopsMenu = await page.locator('//a[text()="Explore"]');
  desktopsMenu.hover() 


  await page.waitForTimeout(5000);



});
