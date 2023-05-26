#----------------------------------
# Empty Cucumber .feature file
#----------------------------------
    
Feature: Amita location feature
  
  Scenario: Amita Location Test Scenario
  
  Given User is already on Home page
  When title of the Home page is Healthcare|Acension
  Then User clicks on location button
  Then user clicks on search box
  And enter location data and clicks on physical therapy button
  Then user clicks on desired location
  Then user sees details of the location
  Then user closes browser
   
