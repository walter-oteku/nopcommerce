module.exports = new class HomePage{
    get doGetUsername(){
        return $('//tstg')
    }
    get doGetEmail(){
        return $('/dygj')
    }
    get doPassword(){
        return $('./sbhbj')
    }
    get doGetLogin(){
        return $('.//dcdcc')
    }
    async doLogin(name, email, pass){
        await this.doGetUsername.setValue(name)
        await this.doGetEmail.setValue(email)
        await this.doPassword.setValue(pass)
        await this.doGetLogin.click()
    }
}