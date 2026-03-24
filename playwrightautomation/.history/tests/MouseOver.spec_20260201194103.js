const { test, expect }=require('@playwright/test');

test('Mouse hover on Desktops and click Mac', async ({ page }) => {

  await page.goto('https://demo.opencart.com/');

  const desktopsMenu = await page.locator("//a[normalize-space()='Desktops']");
  const macOption =   await page.locator("//a[normalize-space()='Mac (1)']");
 
   desktopsMenu.hover();

  await macOption.hover();

  await macOption.click();

//   await expect(page).toHaveTitle(/Mac/);

//   await page.waitForTimeout(3000);
});
