module.exports = new class BasePage{
    async navigateToUrl(){
        await browser.url('https://demo.nopcommerce.com/');
        await browser.maximizeWindow();
        await browser.pause(5000);
    }
}