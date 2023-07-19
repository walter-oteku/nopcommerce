const basePage = require('../../src/pages/basepage')
const homePage = require('../../src/pages/home.page')
describe('home page functionality', async()=>{
    it('verify about us details', async()=>{
        await basePage.navigateToUrl();
        await homePage.doLogin()
    })
})