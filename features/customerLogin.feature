Feature: Customer login feature

  Background:
    Given I open web-page as "customer"

  Scenario: Customer checks account status
    And I logged in as "Harry Potter"
    When I select 1006 account
    Then I check status equal "Account Number : 1006 , Balance : 0 , Currency : Rupee"

  Scenario: Customer deposit into account and check transaction
    And I logged in as "Harry Potter"
    When I select 1005 account
    Then I deposit 404 and 505 pound
    And I check transactions appear in the transaction list
    | Amount | Transaction Type |
    | 404    | Credit           |
    | 505    | Credit           |
