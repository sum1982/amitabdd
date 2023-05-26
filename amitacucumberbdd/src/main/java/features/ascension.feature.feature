#----------------------------------
# Empty Cucumber .feature file
#----------------------------------
    
Feature: Amita location feature
@TC1  
  Scenario Outline: Amita Location Test Scenario
  
  Given User is already on Home page
  When title of the Home page is Healthcare|Acension
  Then User clicks on location button
  Then user clicks on search box
  And enter location "<location>" and clicks on physical therapy button
  Then user clicks on desired location
  Then user sees details of the location
  Then user closes browser
Examples:
  | location |
  | Carol Stream, IL 60188 |
@TC2
  Scenario Outline: Amita Specialty Care Scenario
Given User is already on Home page
When User clicks on Specialty Care link
Then user clicks on Search for Specialty box and enters "<data>"
And user clicks on search button
And user scrolls down and clicks Find A Location
Then user closes browser

Examples:
    | data |
    | post-acute care |
@TC3
 Scenario Outline: Amita Donation Scenario
Given User is already on Home page
When User clicks on Donation link
Then User clicks on Illinois box
Then User clicks Illinois Ascension Foundation And clicks on MAKE A GIFT
Then User clicks on other_box and enters "<Amount>"
Then user closes browser

Examples:
   | Amount |
   | $50 |
@TC4
 Scenario Outline: Amita Career Scenario
Given user is already on Main page
When user clicks on Careers link
Then user enters job_title and area_zip
Then user clicks on Apply Now button
Then enters email "<data>"
Then user closes browser

Examples:
   | data |
   | kav@abc.com |
@TC5
 Scenario Outline: Amita pricetransparency Scenario
Given user is already on Homepage
Then user clicks on pricetransparency link
Then user clicks on ESTIMATE MY PRICE
Then user clicks on LABS and clicks on BLOOD
Then user clicks on Routine lab testing
Then user clicks on link and enters "<data>"
Then user selects insurance and plan and clicks search
Then user closes browser

Examples:
   | data |
   | 60194 |

