---
title: "Common question types"
section: "members"
permalink: /members/survey/4.html
category: "survey"
tags: [appendix, question]
icon: object-group
question: "What is the key difference between different type of questions? How can I answer them correctly?"
toc: true
---

### <i class="pe-anchor pe-fw"></i> The answer

There are several types of responses ranging from single answer, multiple answer, and open-ended. We have listed out the key types below including the actual example and how to use them.



#### Yes/No

Explanation: Use this for questions that will require a basic yes/no answer.

##### Example

<div class="radio">
  <label>
    <input type="radio" name="yesno" id="E1" value="yes" checked> Yes
  </label>
</div>
<div class="radio">
  <label>
    <input type="radio" name="yesno" id="E1" value="no"> No
  </label>
</div>



#### Text Box

Explanation:
Use this for questions that require a one line answer. Note: the size of the textbox can be set using the length field, he maximum length of the textbox can be set using the precision field.

##### Example

<form class="form-inline">
  <div class="form-group">
    <div class="input-group">
      <div class="input-group-addon">Insert text:</div>
      <input type="text" class="form-control" id="exampleInputAmount" placeholder="Type in here...">
    </div>
  </div>
  <button type="submit" class="button-x">Done</button>
</form>


#### Essay

Explanation:
Use this for questions in requiring an answer in essay format. Note: The col and row width of the essay area can be set be using the length and precision fields.

##### Example

<textarea class="form-control" rows="5"></textarea>



#### Radio Buttons

Explanation:
Use radio buttons for questions that have a set of possible answers, but only one can be selected.

##### Example

<div class="radio">
  <label>
    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked> Option 1
  </label>
</div>
<div class="radio">
  <label>
    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"> Option 2
  </label>
</div>



#### Check Boxes

Explanation:
Use check boxes for questions that have a set of possible answers out of which multiple can be selected.

##### Example

 <div class="checkbox">
   <label>
     <input type="checkbox" value="">
     Option one is this and that&mdash;be sure to include why it's great
   </label>
 </div>
 <div class="checkbox disabled">
   <label>
     <input type="checkbox" value="" disabled>
     Option two is disabled
   </label>
 </div>



#### Dropdown Box

Explanation:
Use this to drop down a list of possible selections. For example, what state are you from? The drop down menu would then produce the list of states.

##### Example

<select class="form-control">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>



#### Rate (scale 1..N)

Explanation:
Use this for questions that require a rating. You can have a rating scale of 1 to N, set by the length field. Multiple options can also be added to the rating block as you see below. To show an extra column “N/A“, set the precision field to 1.

##### Example

<table class="table table-hover">
  <thead>
    <tr class="bg-primary">
      <th> </th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
      <th>N/A</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Option 1</td>
      <td><input type="radio" name="optionsRadios" id="A1" value="option1"></td>
      <td><input type="radio" name="optionsRadios" id="A1" value="option2"></td>
      <td><input type="radio" name="optionsRadios" id="A1" value="option3"></td>
      <td><input type="radio" name="optionsRadios" id="A1" value="option4"></td>
      <td><input type="radio" name="optionsRadios" id="A1" value="option5"></td>
      <td><input type="radio" name="optionsRadios" id="A1" value="option6"></td>
    </tr>
    <tr>
      <td>Option 2</td>
      <td><input type="radio" name="optionsRadios" id="A2" value="option1"></td>
      <td><input type="radio" name="optionsRadios" id="A2" value="option2"></td>
      <td><input type="radio" name="optionsRadios" id="A2" value="option3"></td>
      <td><input type="radio" name="optionsRadios" id="A2" value="option4"></td>
      <td><input type="radio" name="optionsRadios" id="A2" value="option5"></td>
      <td><input type="radio" name="optionsRadios" id="A2" value="option6"></td>
    </tr>
    <tr>
      <td>Option 3</td>
      <td><input type="radio" name="optionsRadios" id="A3" value="option1"></td>
      <td><input type="radio" name="optionsRadios" id="A3" value="option2"></td>
      <td><input type="radio" name="optionsRadios" id="A3" value="option3"></td>
      <td><input type="radio" name="optionsRadios" id="A3" value="option4"></td>
      <td><input type="radio" name="optionsRadios" id="A3" value="option5"></td>
      <td><input type="radio" name="optionsRadios" id="A3" value="option6"></td>
    </tr>
  </tbody>
</table>



#### Date

Explanation:
Use this for responses that require uses to submit back a date. Configure the date format in the ini file.

##### Example

<form class="form-inline">
  <div class="form-group">
    <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
    <div class="input-group">
      <div class="input-group-addon">Insert date:</div>
      <input type="text" class="form-control" id="exampleInputAmount" placeholder="Format: 21/09/2016">
    </div>
  </div>
  <button type="submit" class="button-x">Done</button>
</form>


#### Numeric

Explanation:
Use this for questions which you will only want a numeric answer. Note: All non-numeric responses are discarded. The length determines the max number of digits that can be used, the precision field adds extra size for the numbers begin the comma. This is not very precise yet, so just use the length field for now.

##### Example

<select class="form-control">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>



#### Session text

Explanation:
Use this to add some text to you survey (like a disclaimer before sending on submit). This is in fact no question a user can answer to.
