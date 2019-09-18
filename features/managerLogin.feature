Feature: Manager login feature

  Scenario: Manager finds postcode by customer name
    Given I open web-page as "manager"
    And I open customer list
    When I find a postcode by name "Harry Potter"
    Then I check founded postсode to "E725JB"
