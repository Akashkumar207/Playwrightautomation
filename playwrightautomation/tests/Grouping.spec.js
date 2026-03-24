import { test, expect } from '@playwright/test';

test.beforeAll(async ({ browser }) => {
console.log("this is beforeAll Hook....")
})

test.afterAll('logout', async() => {
   console.log('this is afterAll Hook....')

})

test.beforeEach('Home page test', async () => {
 console.log('this is beforeEach Hook....')
})


test.afterEach('Add Product to Cart', async () => {
  console.log('this is afterEach Hook..... ')
    })


    test.describe.skip('group1 ',()=>{
        test('test1', async({page})=>{
    console.log('this is test 1')

        })
 test('test2', async({page})=>{
    console.log('this is test 2')
    
    })

})
    test.describe('group2 ',()=>{
        test('tes3', async({page})=>{
    console.log('this is test 3')

        })
 test('test4', async({page})=>{
    console.log('this is test 4')
    
    })

})