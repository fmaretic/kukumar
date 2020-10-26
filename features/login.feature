Feature: Login user
  Everybody wants to login.

  Scenario: standard_user should login with password secret_sauce
    Given the user with username "standard_user"
    When she enters password "secret_sauce"
    Then she should see listed items