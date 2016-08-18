---
title: "Administration"
category: "Managing surveys"
section: "clients"
permalink: /clients/E/1.html
icon: university
published: true
---

### Administration

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
