//export{};
const loginPage = require('../../src/pages/login.page');
const basePage = require('../../src/pages/basepage');
const assert = require('assert');
//const expectChai = require('chai').expect;
describe('Login Functionality', async()=>{
    it('Verify Forgot Password Link', async()=>{
        await basePage.navigateToUrl();
        await loginPage.isForgotPassDisplayed();
    })
    it('Verify login with wrong credentials', async()=>{
        await loginPage.doLogin('teste@gmail.com', 'test@1234')
        let error = await loginPage.verifyErrorValidation();
        assert('Login was unsuccessful. Please correct the errors and try again. No customer account found', error, 'Wrong error validation message' );
        await browser.pause(5000);
    })
    it('Verify Login with right credentials', async()=>{
        await loginPage.doLogin('test12@gmail.com', 'Test@1234')
        //expectChai(await browser.getTitle()).to.equals('nopCommerce demo store');
        await browser.pause(5000);
        
     })
})