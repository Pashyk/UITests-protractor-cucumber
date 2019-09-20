const { expect } = require('chai');
const { When, Then } = require('cucumber');
const managerPage = new (require('../pageObjects/managerPage'))();

When('I open customer list', async () => managerPage.openCustomerList());

When('I add customers from the table', async (table) => {
  const customers = table.hashes();
  return managerPage.addCustomers(customers);
});

Then('I check {string} postсode. It should be equal {string}', async (customer, string) => {
  const postCode = await managerPage.getPostcode(customer);
  return expect(postCode).to.equal(string);
});

Then('I check for availability new customers in customers list', async (data) => {
  const customer = data.rowsHash();
  const result = await managerPage.findCustomers(customer['First Name']);
  expect(result).to.equal(true);
});
