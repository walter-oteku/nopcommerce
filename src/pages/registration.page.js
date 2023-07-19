module.exports = new class RegistrationPage{
    get doGetRegistrationBtn(){
        return $(".ico-register");
    }
    get doGetGender(){
        return $("//input[@id='gender-female']");
    }
    get doGetFname(){
        return $('#FirstName');
    }
    get doGetLname(){
        return $("//input[@id='LastName']");
    }
    get doGetDate(){
        return $("//select[@name='DateOfBirthDay']")
    }
    get doGetMonth(){
        return $("//select[@name='DateOfBirthMonth']");
    }
    get doGetYear(){
        return $("//select[@name='DateOfBirthYear']");
    }
    get doGetEmailAddress(){
        return $("//input[@id='Email']");
    }
    get doGetCompanyName(){
        return $("//input[@id='Company']");
    }
    get doGetUncheckNewsLetter(){
        return $("//input[@id='Newsletter']");
    }
    get doGetPassword(){
        return $("//input[@id='Password']");
    }
    get doGetConfirmPassword(){
        return $("//input[@id='ConfirmPassword']");
    }
    get doGetRegisterBtn(){
        return $("//button[@id='register-button']");
    }
    get doGetSuccessMsg(){
        return $("//div[@class='result']");
    }
    async doRegister(fname, lname, email, cname, pass, cpass){
        await this.doGetRegistrationBtn.click();
        await browser.pause(5000);
        await this.doGetGender.click();
        await this.doGetFname.addValue(fname);
        await browser.pause(500);
        await this.doGetLname.addValue(lname);
        await browser.pause(500);
        await this.doGetDate.selectByIndex([5]);
        await this.doGetMonth.selectByIndex([10]);
        await this.doGetYear.selectByIndex([30]);
        await browser.pause(500);
        await this.doGetEmailAddress.addValue(email);
        await browser.pause(500);
        await this.doGetCompanyName.addValue(cname);
        await this.doGetUncheckNewsLetter.click();
        await this.doGetPassword.addValue(pass);
        await this.doGetConfirmPassword.addValue(cpass);
        await browser.pause(500);
        await this.doGetRegisterBtn.scrollIntoView();
        await this.doGetRegisterBtn.click();
        await browser.pause(5000);

    }
    async doGetSuccessText(){
        let msg = await this.doGetSuccessMsg.getText();
        return msg;
    }
    
}
    