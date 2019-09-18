class BasePage {
  constructor() {
    this.url = `${browser.baseUrl}/login`;
    this.basePageBtn = $('button[ng-click="home()"]');
    this.EC = protractor.ExpectedConditions;
  }

  open(params) {
    return browser.get(this.url);
  }

  async waitForElement(element, timeout = 15000) {
    return browser.wait(this.EC.visibilityOf(element), timeout);
  }
}
module.exports = BasePage;
