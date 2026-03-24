const { test, expect } = require('@playwright/test');

test('Handle dropdowns', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  // 🔽 Multiple ways to select option from dropdown

  // 1️⃣ By visible text (label)
  // await page.locator('#country').selectOption({ label: 'India' });

  // 2️⃣ By visible text (string)
  // await page.locator('#country').selectOption('India');

  // 3️⃣ By value
  // await page.locator('#country').selectOption({ value: 'uk' });

  // 4️⃣ By index
  await page.locator('#country').selectOption({ index: 1 });

  // ✅ Assertions

  // Approach 1: Check number of options in dropdown
  const options = page.locator('#country option');
  await expect(options).toHaveCount(10);

// Assetions 
    // Approach 2: check number of option in dropdown
  const allOptions = await page.$$('#country option');
    console.log('Total options in dropdown:', allOptions.length);
    expect(allOptions.length).toBe(10);


     // Approach 2: check number of option in dropdown
  const Options = await page.$$('#country option');
    expect(options).toHaveCount(10)


    //check presence of the element or not in dropdon options
    const textContent = await page.locator('#country').textContent();
    console.log('Dropdown options text content:', textContent);
    await expect(textContent.includes('India')).toBeTruthy();

  await page.waitForTimeout(5000);


});
