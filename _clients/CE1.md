---
title: "Administration"
section: "clients"
permalink: /clients/account/1.html
category: account
tags: [admin]
icon: cogs
---

### The answer

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.


#### Batch Account Creation

On either the Respondent or Designer Management Interfaces, click Bulk Upload. You will be presented with a form asking for File Type and File to Upload. From the File Type dropdown, select the file type you wish to upload. From the File to Upload browse your local filesystem to find the specific file you are uploading.

Tab Delimited, Data File Format: The tab delimited file should contain rows of text, terminated by a newline character(\n), with each field in the rows delimited by the tab character(\t). Each of the examples below should be a single row.


Respondent Format:
Username, Password and Group are required fields
Field Order:
username\tpassword\tgroup\tfname\tlname\t email\texpiration\tdisabled\n
Example Row:
looser\tsecret\teditors\tJohn\tSmith\t smith@yahoo.com\t20011122\tN\n
Designer Format:
Username, Password and Group are required fields
Field Order:
username\tpassword\tgroup\tfname\tlname\temail\t design\tstatus\texport\tgroupedit\tgroupadmin\tgrouprespondents\t expiration\tdisabled
Example Row:
looser\tsecret\teditors\tJohn\tSmith\tsmith@yahoo.com\t Y\tN\tY\tN\Y\tN\t20031122\tY\n
CSV, Data File Format:
Not yet implemented
XML, Data File Format:
Not yet implemented
