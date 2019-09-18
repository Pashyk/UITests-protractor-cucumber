Feature: Customer check transaction

  Scenario: Customer deposit into account and check transaction
    Given I open web-page as "customer"
    And I logged in as "Harry Potter"
    When I select 1005 account
    Then I deposit 4000 and 5000 pound
    And I check transaction list
    | Amount | Transaction Type |
    | 4000   | Credit           |
    | 5000   | Credit           |