const LoginPage = require('./loginPage.js');

class ManagerPage extends LoginPage {
  constructor() {
    super();
    this.customersListBtn = $('button[ng-click="showCust()"]');
    this.customersList = $$('tr');
    this.customerName = $('[ng-model="fName"]'),
    this.customerLastName = $('[ng-model="lName"]'),
    this.customerPostCode = $('[ng-model="postCd"]'),
    this.openAccount = $('button[ng-click="openAccount()"]');
    this.addCustomer = $('button[ng-click="addCust()"]');
    this.addCustomerBtn = $('button[type="submit"]');
    this.customersTable = '.table'

  }
  async closeAlertMessage() {
    return browser.switchTo().alert().accept();
  }

  async findCustomers(name) {
    const customer = await element(by.cssContainingText(this.customersTable, name)).isPresent();
    if(!customer) throw Error(`Can't find ${name} in customer's list`);
    return customer;
  }

  async openCustomerList() {
    return this.customersListBtn.click();
  }

  async getPostcode(name) {
    const postCodeList = await this.customersList.getText();
    const row = await postCodeList.filter(item => item.includes(name));
    const postCode = row.join().split(' ')[2];
    if (postCode === undefined) throw Error(`Can't find ${name}'s postcode`);
    return postCode;
  }

  async addCustomers(customers) {
    await this.addCustomer.click();
    for (let customer of customers) {
      await this.customerName.sendKeys(customer['First Name']);
      await this.customerLastName.sendKeys(customer['Last Name']);
      await this.customerPostCode.sendKeys(customer['Post Code']);
      await this.addCustomerBtn.click();
      await this.closeAlertMessage();
    }
  }
}
module.exports = ManagerPage;
