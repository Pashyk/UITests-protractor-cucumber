const { expect } = require('chai');
const { Given, When, Then } = require('cucumber');
const managerPage = new(require('../pageObjects/managerPage'))();

Given('I open customer list', async () => managerPage.openCustomerList());

When('I find a postcode by name {string}', async string => managerPage.getPostcode(string));

Then('I check founded postсode to {string}', async string => {
  const postCode = await managerPage.getPostcode(string);
  return expect(postCode).to.equal(string);
});
