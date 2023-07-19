const basePage = require('../../src/pages/basepage');
const registrationPage = require('../../src/pages/registration.page');
const assert = require('assert');

describe('Signup functionality', async()=>{
    it('verify signup', async()=>{
        await basePage.navigateToUrl();
        await registrationPage.doRegister('Test12', 'test2', 'test12@gmail.com', 'Saf', 'Test@1234', 'Test@1234');
    })
    it('Verify Success Message', async()=>{
       let msg = await registrationPage.doGetSuccessText();
        assert('Your registration completed', msg)
    })
})