---
title: "Strike rate"
section: "clients"
category: "monitor"
permalink: /clients/monitor/1.html
tags: [progress, update]
icon: line-chart
question: "What is the strike rate? Why do I need to monitor it once my survey has gone into the actual data collection process?"
---

### <i class="pe-anchor pe-fw"></i> The answer

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.


#### Strike rate

While completing surveys, various access statistics are collected for administrative review. These statistics, described in the table further below, allow you to better understand how your respondents interact with the surveys you create.

Questions, such as below examples, provide valuable insight into the effectiveness of your surveys.

Are my respondents having difficulty logging in?
Are respondents moving through surveys, or are they abandoning them prematurely?
What percentage of survey attempts have resulted in a complete survey?

<table class="table table-hover">
  <tr class="bg-primary">
    <th>Wording</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>Login Failures</td>
    <td>The number of failed attempts to authenticate to take a particular survey.  This count only reflects the number of failures while attempting to access <em>a particular survey</em>.  Failed attempts to access the list of possible surveys are not recorded.</td>
  </tr>
  <tr>
    <td>Attempted</td>
    <td>The number of unique attempts to start taking a survey, regardless of whether the attempt results in a completed or suspended survey.</td>
  </tr>
  <tr>
    <td>Abandoned</td>
    <td>The number of surveys begun, but not suspended or completed.  This statistic can accumulate for a myriad of reasons, including:
      <ul>
        <li>Closing the browser and returning to the survey</li>
        <li>Refreshing the survey (via the browser refresh) before submitting</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Suspended</td>
    <td>The number of surveys saved for later completion.</td>
  </tr>
  <tr>
    <td>Completed</td>
    <td>The number of surveys completed. If a survey allows a respondent to reply multiple times, this statistic accumulates for each successful completion of the survey.</td>
  </tr>
</table>

If your survey is effective, the number of login failures and abandoned surveys is low, the number of attempts is nearly equal to the number of complete, and the number of suspended is small.

As a general rule of thumb, you should investigate your survey implementation if any of these conditions occur:

Excessive number of login failures.
Large number of abandoned surveys.
Large disparity in the number of attempted and completed surveys.
High number of suspended, and low number of completed, surveys.

#### Refreshing Statistics

As respondents complete surveys, the statistics will change. You may update the statistics page to show the most recent values by clicking the `Refresh Statistics` button.

#### Reseting Statistics

Occasionally, you may need to reset survey statistics. For example, if you held a "trial run" survey phase before the actual deployment, you would need to delete all the responses and reset the statistics for the "actual run."

To reset statistics for a survey, place a check in the "Reset" column on the row containing the survey you want to reset, then click the `Reset Statistics` button. You may reset more than one survey by placing a check beside every survey you want to reset, then clicking the "Reset Statistics" button. You will be prompted to confirm the reset action each time you click the "Reset Statistics" button; answer "Ok" to reset, or "Cancel" to skip the reset.
