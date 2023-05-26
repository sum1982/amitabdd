$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/kohli/OneDrive/Documents/NetBeansProjects/amitacucumberbdd/src/main/java/features/ascension.feature.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#----------------------------------"
    },
    {
      "line": 2,
      "value": "# Empty Cucumber .feature file"
    },
    {
      "line": 3,
      "value": "#----------------------------------"
    }
  ],
  "line": 5,
  "name": "Amita location feature",
  "description": "",
  "id": "amita-location-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Amita Location Test Scenario",
  "description": "",
  "id": "amita-location-feature;amita-location-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User is already on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "title of the Home page is Healthcare|Acension",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on location button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on search box",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "enter location \"\u003clocation\u003e\" and clicks on physical therapy button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user clicks on desired location",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user sees details of the location",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "amita-location-feature;amita-location-test-scenario;",
  "rows": [
    {
      "cells": [
        "location"
      ],
      "line": 18,
      "id": "amita-location-feature;amita-location-test-scenario;;1"
    },
    {
      "cells": [
        "Carol Stream, IL 60188"
      ],
      "line": 19,
      "id": "amita-location-feature;amita-location-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Amita Location Test Scenario",
  "description": "",
  "id": "amita-location-feature;amita-location-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User is already on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "title of the Home page is Healthcare|Acension",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on location button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on search box",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "enter location \"Carol Stream, IL 60188\" and clicks on physical therapy button",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user clicks on desired location",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user sees details of the location",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmitaTest.user_is_already_on_Home_page()"
});
formatter.result({
  "duration": 5689085700,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.title_of_the_Home_page_is_Healthcare_Acension()"
});
formatter.result({
  "duration": 104253300,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_clicks_on_location_button()"
});
formatter.result({
  "duration": 1510295600,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_clicks_on_search_box()"
});
formatter.result({
  "duration": 257062900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carol Stream, IL 60188",
      "offset": 16
    }
  ],
  "location": "AmitaTest.enter_location_and_clicks_on_physical_therapy_button(String)"
});
formatter.result({
  "duration": 1828559300,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_clicks_on_desired_location()"
});
formatter.result({
  "duration": 384116700,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_sees_details_of_the_location()"
});
formatter.result({
  "duration": 5025700,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_closes_browser()"
});
formatter.result({
  "duration": 696892500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Amita Specialty Care Scenario",
  "description": "",
  "id": "amita-location-feature;amita-specialty-care-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@TC2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User is already on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User clicks on Specialty Care link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user clicks on Search for Specialty box and enters \"\u003cdata\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user scrolls down and clicks Find A Location",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "amita-location-feature;amita-specialty-care-scenario;",
  "rows": [
    {
      "cells": [
        "data"
      ],
      "line": 30,
      "id": "amita-location-feature;amita-specialty-care-scenario;;1"
    },
    {
      "cells": [
        "post-acute care"
      ],
      "line": 31,
      "id": "amita-location-feature;amita-specialty-care-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "Amita Specialty Care Scenario",
  "description": "",
  "id": "amita-location-feature;amita-specialty-care-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@TC2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User is already on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User clicks on Specialty Care link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user clicks on Search for Specialty box and enters \"post-acute care\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user scrolls down and clicks Find A Location",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmitaTest.user_is_already_on_Home_page()"
});
formatter.result({
  "duration": 4762769400,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_clicks_on_Specialty_Care_link()"
});
formatter.result({
  "duration": 3304805500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post-acute care",
      "offset": 52
    }
  ],
  "location": "AmitaTest.user_clicks_on_Search_for_Specialty_box_and_enters(String)"
});
formatter.result({
  "duration": 377139500,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_clicks_on_search_button()"
});
formatter.result({
  "duration": 1261770500,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_scrolls_down_and_clicks_Find_A_Location()"
});
formatter.result({
  "duration": 775869000,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_closes_browser()"
});
formatter.result({
  "duration": 676251100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Amita Donation Scenario",
  "description": "",
  "id": "amita-location-feature;amita-donation-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@TC3"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is already on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User clicks on Donation link",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User clicks on Illinois box",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User clicks Illinois Ascension Foundation And clicks on MAKE A GIFT",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User clicks on other_box and enters \"\u003cAmount\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "amita-location-feature;amita-donation-scenario;",
  "rows": [
    {
      "cells": [
        "Amount"
      ],
      "line": 42,
      "id": "amita-location-feature;amita-donation-scenario;;1"
    },
    {
      "cells": [
        "$50"
      ],
      "line": 43,
      "id": "amita-location-feature;amita-donation-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 43,
  "name": "Amita Donation Scenario",
  "description": "",
  "id": "amita-location-feature;amita-donation-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@TC3"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is already on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User clicks on Donation link",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User clicks on Illinois box",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User clicks Illinois Ascension Foundation And clicks on MAKE A GIFT",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User clicks on other_box and enters \"$50\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmitaTest.user_is_already_on_Home_page()"
});
formatter.result({
  "duration": 5518425500,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_clicks_on_Donation_Scenario()"
});
formatter.result({
  "duration": 974453900,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_clicks_on_Illinois_box()"
});
formatter.result({
  "duration": 65081700,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_clicks_Illinois_Ascension_Foundation_And_clicks_on_MAKE_A_GIFT()"
});
formatter.result({
  "duration": 6216222900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50",
      "offset": 37
    }
  ],
  "location": "AmitaTest.user_clicks_on_other_box_and_enters(String)"
});
formatter.result({
  "duration": 3879794600,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_closes_browser()"
});
formatter.result({
  "duration": 1188844000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 45,
  "name": "Amita Career Scenario",
  "description": "",
  "id": "amita-location-feature;amita-career-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@TC4"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "user is already on Main page",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "user clicks on Careers link",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "user enters job_title and area_zip",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "user clicks on Apply Now button",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "enters email \"\u003cdata\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "amita-location-feature;amita-career-scenario;",
  "rows": [
    {
      "cells": [
        "data"
      ],
      "line": 54,
      "id": "amita-location-feature;amita-career-scenario;;1"
    },
    {
      "cells": [
        "kav@abc.com"
      ],
      "line": 55,
      "id": "amita-location-feature;amita-career-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 55,
  "name": "Amita Career Scenario",
  "description": "",
  "id": "amita-location-feature;amita-career-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@TC4"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "user is already on Main page",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "user clicks on Careers link",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "user enters job_title and area_zip",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "user clicks on Apply Now button",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "enters email \"kav@abc.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmitaTest.user_is_already_on_Main_page()"
});
formatter.result({
  "duration": 5724681800,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_clicks_on_Careers_link()"
});
formatter.result({
  "duration": 4880626900,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_enters_job_title_and_area_zip()"
});
formatter.result({
  "duration": 2443853700,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_clicks_on_Apply_Now_button()"
});
formatter.result({
  "duration": 1338054700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kav@abc.com",
      "offset": 14
    }
  ],
  "location": "AmitaTest.enters_email(String)"
});
formatter.result({
  "duration": 6047790400,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_closes_browser()"
});
formatter.result({
  "duration": 727137600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 57,
  "name": "Amita pricetransparency Scenario",
  "description": "",
  "id": "amita-location-feature;amita-pricetransparency-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 56,
      "name": "@TC5"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "user is already on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "user clicks on pricetransparency link",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "user clicks on ESTIMATE MY PRICE",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "user clicks on LABS and clicks on BLOOD",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "user clicks on Routine lab testing",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "user clicks on link and enters \"\u003cdata\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "user selects insurance and plan and clicks search",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 67,
  "name": "",
  "description": "",
  "id": "amita-location-feature;amita-pricetransparency-scenario;",
  "rows": [
    {
      "cells": [
        "data"
      ],
      "line": 68,
      "id": "amita-location-feature;amita-pricetransparency-scenario;;1"
    },
    {
      "cells": [
        "60194"
      ],
      "line": 69,
      "id": "amita-location-feature;amita-pricetransparency-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 69,
  "name": "Amita pricetransparency Scenario",
  "description": "",
  "id": "amita-location-feature;amita-pricetransparency-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 56,
      "name": "@TC5"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "user is already on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "user clicks on pricetransparency link",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "user clicks on ESTIMATE MY PRICE",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "user clicks on LABS and clicks on BLOOD",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "user clicks on Routine lab testing",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "user clicks on link and enters \"60194\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "user selects insurance and plan and clicks search",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmitaTest.user_is_already_on_Homepage()"
});
formatter.result({
  "duration": 4573763100,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_clicks_on_pricetransparency_link()"
});
formatter.result({
  "duration": 1027132500,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_clicks_on_ESTIMATE_MY_PRICE()"
});
formatter.result({
  "duration": 93308600,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_clicks_on_LABS_and_clicks_on_BLOOD()"
});
formatter.result({
  "duration": 2934037100,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_clicks_on_Routine_lab_testing()"
});
formatter.result({
  "duration": 868266600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60194",
      "offset": 32
    }
  ],
  "location": "AmitaTest.user_clicks_on_link_and_enters(String)"
});
formatter.result({
  "duration": 1753947400,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_selects_insurance_and_plan_and_clicks_search()"
});
formatter.result({
  "duration": 3969806900,
  "status": "passed"
});
formatter.match({
  "location": "AmitaTest.user_closes_browser()"
});
formatter.result({
  "duration": 695731500,
  "status": "passed"
});
});