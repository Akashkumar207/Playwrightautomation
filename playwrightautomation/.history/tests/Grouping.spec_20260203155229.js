import { test, expect } from '@playwright/test';

test.beforeAll(async ({ browser }) => {
console.log("this is beforeAll Hook....")
})

test.afterAll('logout', async() => {
   confirm.log('this is afterAll Hook....')

})

test.beforeEach('Home page test', async () => {
 console.log('this is beforeEach Hook....')
})


test.afterEach('Add Product to Cart', async () => {
  console.log('this is afterEach Hook..... ')
    })

    test.describe('group1 ',()=>{
        test('test1', async({page})=>{



        })

    
    })

