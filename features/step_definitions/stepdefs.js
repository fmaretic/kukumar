const assert = require('assert');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('the user with username {string}', function (username) {
  this.username = username;
});

When('she enters password {string}', function (password) {
  this.password = password;
});

Then('she should see listed items', async function () {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://www.saucedemo.com/index.html');
    await driver.findElement(By.id('user-name')).sendKeys(this.username, Key.ENTER);
    await driver.findElement(By.id('password')).sendKeys(this.password, Key.ENTER);
    let firstResult = await driver.wait(until.elementLocated(By.className('inventory_item')), 5000);
  } finally {
    driver.quit();
  }
});