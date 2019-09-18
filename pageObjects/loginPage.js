const BasePage = require('./basePage.js');

class LoginPage extends BasePage {
  constructor() {
    super();
    this.loginManagerBtn = $('button[ng-click="manager()"]');
    this.loginCustomerBtn = $('button[ng-click="customer()"]');
  }

  async login(role) {
    return role === 'customer' ? this.loginCustomerBtn.click() : this.loginManagerBtn.click();
  }
}
module.exports = LoginPage;
