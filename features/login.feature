Feature: Login user
  Everybody wants to login.

  Scenario Outline: standard_user should login with password secret_sauce
    Given the user with username <username>
    When she enters password <password>
    Then she should see listed items and their pictures

    Examples:
    | username | password |
    | "standard_user" | "secret_sauce" |
    | "problem_user" | "secret_sauce" |