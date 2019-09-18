const { expect } = require('chai');
const { Given, When, Then } = require('cucumber');
const customerPage = new (require('../pageObjects/customerPage'))();
const loginPage = new (require('../pageObjects/loginPage'))();
const basePage = new(require('../pageObjects/basePage'))();

Given('I open web-page as {string}', async role => {
    await basePage.open();
    return loginPage.login(role)
});

When('I select his account {string}', async string => customerPage.selectAccount(string));

Then('I check status equal {string}', async string => {
    const status = await customerPage.accountStatus.getText();
    return expect(status).to.equal(string);
});
