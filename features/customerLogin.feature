Feature: Customer login feature

  Scenario: Customer checks account status
    Given I open web-page as "customer"
    And I logged in as "Harry Potter"
    When I select his account "1006"
    Then I check status equal "Account Number : 1006 , Balance : 0 , Currency : Rupee"