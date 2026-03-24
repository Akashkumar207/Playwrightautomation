const { test, expect }=require('@playwright/test');

test('Mouse hover on Desktops and click Mac', async ({ page }) => {

  // 1️⃣ Open the application
  await page.goto('https://demo.opencart.com/');

  // 2️⃣ Locate menu elements
  const desktopsMenu = page.locator("//a[normalize-space()='Desktops']");
  const macOption = page.locator("//a[normalize-space()='Mac (1)']");

  // 3️⃣ Hover on "Desktops" menu
  await desktopsMenu.hover();

  // 4️⃣ Hover on "Mac (1)" option (submenu)
  await macOption.hover();

  // 5️⃣ Click on "Mac (1)"
  await macOption.click();

  // 6️⃣ Verify navigation (optional but recommended)
  await expect(page).toHaveTitle(/Mac/);

  // 7️⃣ Pause for observation
  await page.waitForTimeout(3000);
});
