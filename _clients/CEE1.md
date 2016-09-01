---
title: "Client account overview"
section: "clients"
permalink: /clients/account/1.html
category: "account"
tags: [admin]
icon: cogs
question: "How do I access to the survey system? And how do I actually manage my client accounts?"
language: en
reference: CE1
---

### The answer

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.


#### Batch Account Creation

On either the Respondent or Designer Management Interfaces, click Bulk Upload. You will be presented with a form asking for File Type and File to Upload. From the File Type dropdown, select the file type you wish to upload. From the File to Upload browse your local filesystem to find the specific file you are uploading.

tab Delimited, Data File Format: The tab delimited file should contain rows of text, terminated by a newline character <kbd>[Enter]</kbd>, with each field in the rows delimited by the tab character <kbd>[tab]</kbd>. Each of the examples below should be a single row.


##### Respondent Format

**Username**, **Password** and **Group** are required fields

- Field Order:
```
username [tab] password [tab] group [tab] fname [tab] lname [tab]  email [tab] expiration [tab] disabled [Enter]
```

- Example Row:
```
looser [tab] secret [tab] editors [tab] John [tab] Smith [tab]  smith@yahoo.com [tab] 20011122 [tab] N [Enter]
```


##### Designer Format

Username, Password and Group are required fields

- Field Order:
```
username [tab] password [tab] group [tab] fname [tab] lname [tab] email [tab] design [tab] status [tab] export [tab] groupedit [tab] groupadmin [tab] grouprespondents [tab]  expiration [tab] disabled
```

- Example Row:
```
looser [tab] secret [tab] editors [tab] John [tab] Smith [tab] smith@yahoo.com [tab] Y [tab] N [tab] Y [tab] N [tab] N [tab] 20031122 [tab] Y [Enter]
```


##### CSV, Data File Format

Not yet implemented

##### XML, Data File Format

Not yet implemented
