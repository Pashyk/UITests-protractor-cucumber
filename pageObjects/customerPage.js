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
    this.transactionList = $$('.table tbody tr');
    this.amount = 'td:nth-of-type(2)';
    this.transactionType = 'td:nth-of-type(3)';
  }

  async openTransactionList() {
    return this.transactionBtn.click();
  }

  async selectAccount(accountNumber) {
    return this.accountSelectBtn.sendKeys(accountNumber);
  }

  async selectCustomer(user) {
    await this.usersList.sendKeys(user);
    return this.userLoginBtn.click();
  }

  async checkTransactions(transactions) {
    await this.openTransactionList();
    for (let transaction of transactions)
    await this.transactionList.filter( async row => {
      let amount = await row.$(this.amount).getText();
      let type = await row.$(this.transactionType).getText();
      return transaction['Amount'] === amount && transaction['Transaction Type'] === type;
    });
    return transactions;
    }

  async deposit(args) {
    for (let arg of args) {
      await this.waitForElement(this.depositBtn.click());
      await this.waitForElement(this.amountToDeposit.sendKeys(arg));
      await this.waitForElement(this.depositConfirirmBtn.click());
      await this.waitForElement(this.depositMsg);
    }
  }
}
module.exports = CustomerPage;
