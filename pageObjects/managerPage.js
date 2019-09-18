const LoginPage = require('./loginPage.js');

class ManagerPage extends LoginPage {
  constructor() {
    super();
    this.customersListBtn = $('button[ng-click="showCust()"]');
    this.customersList = $$('tr');
    this.openAccount = $('button[ng-click="openAccount()"]');
    this.addCustomer = $('button[ng-click="addCust()"]');
    this.url = `${browser.baseUrl}/manager`;
  }

  async openCustomerList() {
    return this.customersListBtn.click();
  }

  async getPostcode(name) {
    const postCodeList = await this.customersList.getText();
    const postCode = await postCodeList.filter(item => item.includes(name));
    return postCode.join().split(' ')[2];
  }
}
module.exports = ManagerPage;
