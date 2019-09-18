const LoginPage = require('./loginPage.js');

class CustomerPage extends LoginPage {
  constructor() {
    super();
    this.usersList = $('#userSelect');
    this.userLoginBtn = $('button[ng-show="custId != \'\'"]');
    this.accountSelectBtn = $('#accountSelect');
    this.accountStatus = $('.center:nth-child(3)');
    this.transactionBtn = $('button[ng-click="transactions()"]');
    this.depositBtn = $('button[ng-click="deposit()"]');
    this.depositMsg = $('.ng-scope > span');
    this.amountToDeposit = $('.form-group > input');
    this.depositConfirirmBtn = $('button[type="submit"]');
    this.depositMsg = $('[ng-show="message"]');
    this.withdrawalBtn = $('button[ng-click="withdrawl()"]');
    this.transactionList = $$('tr');
  }

  async selectUser(user) {
    await this.usersList.sendKeys(user);
    return this.userLoginBtn.click();
  }

  async selectAccount(accountNumber) {
    return this.accountSelectBtn.sendKeys(accountNumber);
  }

  async selectCustomer(user) {
    await this.usersList.sendKeys(user);
    return this.userLoginBtn.click();
  }

  async deposit(arg) {
    await this.depositBtn.click();
    await this.amountToDeposit.sendKeys(arg);
    await this.depositConfirirmBtn.click();
    return this.waitForElement(this.depositMsg)
  }
}

module.exports = CustomerPage;
