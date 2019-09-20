const { expect } = require('chai');
const { Given, When, Then } = require('cucumber');
const customerPage = new (require('../pageObjects/customerPage'))();
const loginPage = new (require('../pageObjects/loginPage'))();
const basePage = new (require('../pageObjects/basePage'))();

Given('I open web-page as {string}', async (role) => {
  await basePage.open();
  return loginPage.login(role);
});

Given('I logged in as {string}', async (customer) => customerPage.selectCustomer(customer));

When('I select {int} account', async (account) => customerPage.selectAccount(account));

Then('I check status equal {string}', async (string) => {
  const status = await customerPage.accountStatus.getText();
  return expect(status).to.equal(string);
});

Then('I deposit {int} and {int} pound', async (amount, amount2) => customerPage.deposit([amount, amount2]));

Then('I check transactions appear in the transaction list', async (data) => {
  const transactions = data.hashes();
  const result = await customerPage.checkTransactions(transactions);
  expect(result).to.equal(transactions);
});
