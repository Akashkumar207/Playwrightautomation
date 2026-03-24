 const {test,expect}= require('@playwright/test')
 test('BootstrapMultiSelectDropdown test dropdown',async({page})=>{
 
   await page.goto('https://jquery-az.com/boots/demo.php?ex=63.0_2')
    const dropdown= page.locator('#option-droup-demo')
    await dropdown.click()

    const option1= page.locator('//ul[@class="multiselect-container dropdown-menu"]/li/a/label[contains(text(),"HTML")]')
    await option1.click()
    await expect(option1).toBeVisible()

    const option2= page.locator('//ul[@class="multiselect-container dropdown-menu"]/li/a/label[contains(text(),"CSS")]')
    await option2.click()
    await expect(option2).toBeVisible()
    const option3= page.locator('//ul[@class="multiselect-container dropdown-menu"]/li/a/label[contains(text(),"JavaScript")]')
    await option3.click()
    await expect(option3).toBeVisible()

    
    await page.waitForTimeout(5000);



 })
 