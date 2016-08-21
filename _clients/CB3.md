---
title: "Publishing your survey"
category: "Managing surveys"
section: "clients"
permalink: /clients/B/3.html
icon: university
published: true
---

### Publishing a survey

Once you have created/edited a survey, and are ready to make it available online you must activate it. Go to the Management Interface, click Change the Status of a Survey. Find the survey you want to activate. Make note of the survey ID(SID) and the name(SURVEYNAME).

NOTE: At this point you must activate the survey. This is a one way operation. After it has been activated, you can no longer edit or test this survey. All results gathered in testing mode (if any) will be cleared by activating it.

Click on the Activate link for your survey. At this point your survey is active.

To insert the survey into an existing page you must place a PHP tag in the HTML for the page.

NOTE:
- This code was also given to you on the Finish tab of the survey design.
- To access an active survey, go to http://$PATH/public/survey.php?name=SURVEYNAME
- To embed an active survey within another php document, add this code: <?php $sid=SID; $results=1; include('/$PATH/public/handler.php'); ?>