module.exports = new class LoginPage{
    get doGeLoginNavBar(){
        return $("//a[normalize-space()='Log in']");
    }
    get doGetEmailAddress(){
        return $('#Email');
    }
    get doGetPassword(){
        return $('#Password');
    }
    get doGetFogortPass(){
        return $('*=Forgot password?');
    }
    get doGetLoginBtn(){
        return $("//button[normalize-space()='Log in']");
    }
    get doGetError(){
        return $("//div[@class='message-error validation-summary-errors']");
    }

    async isForgotPassDisplayed(){
        await this.doGetFogortPass.isDisplayed();
    }
    async doLogin(email, pass){
        await this.doGeLoginNavBar.click();
        await this.doGetEmailAddress.setValue(email);
        await this.doGetPassword.setValue(pass);
        await this.doGetLoginBtn.click();
        await browser.pause(5000)

    }
    async verifyErrorValidation(){
        let error = await this.doGetError.getText();
        return error;
    }
    
    
}

