Feature: Manager login feature

  Scenario: Manager finds postcode by customer name
    Given I open web-page as "manager"
    When I open customer list
    Then I check "Harry Potter" postсode. It should be equal "E725JB"

  Scenario: Add new customers
    Given I open web-page as "manager"
    When I add customers from the table
      | First Name | Last Name       | Post Code |
      | LeBron     | James           | 00001     |
      | Kobe       | Bryant          | 00002     |
      | Giannis    | Antetokonmpo    | 00003     |
    And I open customer list
    Then I check for availability new customers in customers list
      | First Name | Kobe    |
      | First Name | LeBron  |
      | First Name | Giannis |

