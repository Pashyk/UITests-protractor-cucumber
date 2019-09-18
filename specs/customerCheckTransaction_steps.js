const { expect } = require('chai');
const { Given, When, Then } = require('cucumber');
const customerPage = new(require('../pageObjects/customerPage.js'))();

Given('I logged in as {string}', async customer => customerPage.selectCustomer(customer));

When('I select {int} account', async account => customerPage.selectAccount(account));

Then('I deposit {int} and {int} pound', async (amount, amount2) => {
  await customerPage.deposit(amount);
  await browser.sleep(1000);
  return customerPage.deposit(amount2);
});

Then('I check transaction list', async data => {
  await browser.sleep(1000);
  await customerPage.transactionBtn.click();
  const list = await customerPage.transactionList.getText();
  await console.log(list)
  await console.log(data.hashes())
  return expect(list).to.deep.equal(data.hashes());
});
