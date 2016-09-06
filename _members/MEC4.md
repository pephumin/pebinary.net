---
title: "Common question types"
section: "members"
category: "survey"
permalink: /en/members/survey/4.html
tags: [appendix, question]
icon: object-group
question: "What is the key difference between different type of questions? How can I answer them correctly?"
toc: true
---

### <i class="pe-anchor pe-fw"></i> The answer

There are several types of responses ranging from `single answer`, `multiple answer`, `open-ended`, and `rating scale`.

In this article we only cover for *the common types that are popularly used in the mainstream research business*. Please see each of them with description as well as the real examples below.

Should you look for some other types which are not listed here, please do not hesitate to let us know.


#### Close-ended question: Single answer

A closed-ended question is a question format that limits respondents with a list of answer choices from which they must choose to answer the question.

Commonly these types of questions are in the form of multiple choices and specifically for the single answer type, `only one answer is needed`.

This can be a simple yes/no question, or question in scale format where respondent should decide to rate the situation in along the scale continuum.


##### Yes/No question

<div class="panel panel-default">
  <div class="panel-heading">
    <span class="panel-title"><i class="pe-cog pe-lg pe-spin pe-fw"></i> Example of Yes/No question</span>
  </div>
  <div class="panel-body">
    <p><strong><i class="pe-microphone pe-fw"></i> Have you been to Paris?</strong></p>
    <p><em>Note: Only one answer allowed</em></p>
    <div class="radio"><label><input type="radio" name="yesno" id="E1" value="yes" /> Yes I have</label></div>
    <div class="radio"><label><input type="radio" name="yesno" id="E1" value="no" /> No I have not</label></div>
    <button type="submit" class="button-x">submit <i class="pe-check-circle-o"></i></button>
  </div>
</div>


##### Scale rating

<div class="panel panel-default">
  <div class="panel-heading">
    <span class="panel-title"><i class="pe-cog pe-lg pe-spin pe-fw"></i> Example of Scale rating</span>
  </div>
  <div class="panel-body">
    <p><strong><i class="pe-microphone pe-fw"></i> How would you rate your overall satisfaction to the service of this car dealer?</strong><br> Please use scale from 1 to 5 where 1 means I am not satisfied at all, and 5 means I am extremely satisfied.</p>
    <p><em>Note: Only one answer allowed</em></p>
    <div class="radio"><label><input type="radio" name="cussat" id="F1" value="5" /> Extremely satisfied (+5)</label></div>
    <div class="radio"><label><input type="radio" name="cussat" id="F1" value="4" /> Satisfied (+4)</label></div>
    <div class="radio"><label><input type="radio" name="cussat" id="F1" value="3" /> Neither satisfied nor dissatisfied (+3)</label></div>
    <div class="radio"><label><input type="radio" name="cussat" id="F1" value="2" /> Dissatisfied (+2)</label></div>
    <div class="radio"><label><input type="radio" name="cussat" id="F1" value="1" /> Not at all satisfied (+1)</label></div>
    <button type="submit" class="button-x">submit <i class="pe-check-circle-o"></i></button>
  </div>
</div>


##### Numeric

This is a question type that `only deals with numeric answers` (answers in numbers).

<div class="panel panel-default">
  <div class="panel-heading">
    <span class="panel-title"><i class="pe-cog pe-lg pe-spin pe-fw"></i> Example of a numeric question</span>
  </div>
  <div class="panel-body">
    <p><strong><i class="pe-microphone pe-fw"></i> What year is the vehicle registration of your car?</strong><br> Please choose from the provided dropdown list below.</p>
    <p><em>Note: Only one answer allowed</em></p>
    <form class="form-inline">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">Vehicle registration:</div>
          <select class="form-control">
            <option>2010</option>
            <option>2011</option>
            <option>2012</option>
            <option>2013</option>
            <option>2014</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
          </select>
        </div>
      </div>
      <button type="submit" class="button-x">Done <i class="pe-check-circle-o"></i></button>
    </form>
  </div>
</div>


#### Close-ended question: Multiple answer

Similar to the single anwer close ended question as described earlier, the key difference is on the fact that `it accepts several answers within one single question`.


##### Multiple choices

<div class="panel panel-default">
  <div class="panel-heading">
    <span class="panel-title"><i class="pe-cog pe-lg pe-spin pe-fw"></i> Example of Multiple answer</span>
  </div>
  <div class="panel-body">
    <p><strong><i class="pe-microphone pe-fw"></i> Which of these devices do you currently own?</strong></p>
    <p><em>Note: Several answers allowed</em></p>
    <div class="checkbox"><label><input type="checkbox" name="device" id="S7" value="Smartphone" /> Smartphone</label></div>
    <div class="checkbox"><label><input type="checkbox" name="device" id="S7" value="Tablet" /> Tablet</label></div>
    <div class="checkbox"><label><input type="checkbox" name="device" id="S7" value="Laptop" /> Laptop computer</label></div>
    <div class="checkbox"><label><input type="checkbox" name="device" id="S7" value="Desktop" /> Desktop computer</label></div>
    <button type="submit" class="button-x">submit <i class="pe-check-circle-o"></i></button>
  </div>
</div>


#### Open-ended question

An open-ended contrasts with a closed-ended question as it _cannot_ be answered with a simple "yes" or "no", or with a specific piece of information, and which gives the person answering the question scope to give the information that seems to them to be appropriate.

This type of questions is sometimes phrased as `a statement which requires a response`.


##### Date

<div class="panel panel-default">
  <div class="panel-heading">
    <span class="panel-title"><i class="pe-cog pe-lg pe-spin pe-fw"></i> Example of a date question</span>
  </div>
  <div class="panel-body">
    <p><strong><i class="pe-microphone pe-fw"></i> What is your date of birth?</strong> Please enter your date of birth in the provided box below.</p>
    <p><em>Note: Please fill in following this format: 21/09/2016</em></p>
    <form class="form-inline">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">Country:</div>
          <input type="text" class="form-control" id="country" placeholder="Type in here..." />
        </div>
      </div>
      <button type="submit" class="button-x">Done <i class="pe-check-circle-o"></i></button>
    </form>
  </div>
</div>


##### Short answer

It is typically a maximum of `one-line answer box to fill in`.

<div class="panel panel-default">
  <div class="panel-heading">
    <span class="panel-title"><i class="pe-cog pe-lg pe-spin pe-fw"></i> Example of a short open-ended question</span>
  </div>
  <div class="panel-body">
    <p><strong><i class="pe-microphone pe-fw"></i> Which country are you from?</strong><br> You can enter your answer in the provided box below.</p>
    <p><em>Note: Please fill in your answer in the box</em></p>
    <form class="form-inline">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">Insert date:</div>
          <input type="text" class="form-control" id="exampleInputAmount" placeholder="Format: 21/09/2016">
        </div>
      </div>
      <button type="submit" class="button-x">Done <i class="pe-check-circle-o"></i></button>
    </form>
  </div>
</div>


##### Long answer

For the long answer, it normally comes in a `text area format which can be written as long as needed`.

<div class="panel panel-default">
  <div class="panel-heading">
    <span class="panel-title"><i class="pe-cog pe-lg pe-spin pe-fw"></i> Example of a long open-ended question</span>
  </div>
  <div class="panel-body">
    <p><strong><i class="pe-microphone pe-fw"></i> Please describe your feeling/ how you feel about your new house?</strong><br> Please write in as much detail as possible.</p>
    <p><em>Note: Please write in the box below as much as you like</em></p>
    <form>
      <textarea class="form-control" rows="5"></textarea>
      <br>
      <button type="submit" class="button-x">submit <i class="pe-check-circle-o"></i></button>
    </form>
  </div>
</div>


#### Rating scale

This question type is more complex than those described earlier.

A rating scale is a set of categories designed to elicit information about an attribute. In the social sciences, particularly psychology, `the common examples are the scaling response scale which can be 1-5, 1-7, 1-9 or 1-10 rating scales` in which a respondent would be asked to select the number which is considered to reflect the perceived quality of a product.


##### Product attribute rating


<div class="panel panel-default">
  <div class="panel-heading">
    <span class="panel-title"><i class="pe-cog pe-lg pe-spin pe-fw"></i> Example of attribute rating scale</span>
  </div>
  <div class="panel-body">
    <p><strong><i class="pe-microphone pe-fw"></i> How do you like your television in each of these aspects?</strong><br> Please rate each of them by using a rating scale from 1 to 5 where 1 means not good at all, and 5 means very good.</p>
    <p><em>Note: Only one answer allowed for each aspect</em></p>
    <table class="table table-hover">
      <thead>
        <tr class="bg-warning">
          <th width="25%"> </th>
          <th width="15%">Not good at all</th>
          <th width="15%">Not good</th>
          <th width="15%">So so</th>
          <th width="15%">Good</th>
          <th width="15%">Very good</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Screen size</td>
          <td><input type="radio" name="optionsRadios" id="A1" value="option1"></td>
          <td><input type="radio" name="optionsRadios" id="A1" value="option2"></td>
          <td><input type="radio" name="optionsRadios" id="A1" value="option3"></td>
          <td><input type="radio" name="optionsRadios" id="A1" value="option4"></td>
          <td><input type="radio" name="optionsRadios" id="A1" value="option5"></td>
        </tr>
        <tr>
          <td>Build quality</td>
          <td><input type="radio" name="optionsRadios" id="A2" value="option1"></td>
          <td><input type="radio" name="optionsRadios" id="A2" value="option2"></td>
          <td><input type="radio" name="optionsRadios" id="A2" value="option3"></td>
          <td><input type="radio" name="optionsRadios" id="A2" value="option4"></td>
          <td><input type="radio" name="optionsRadios" id="A2" value="option5"></td>
        </tr>
        <tr>
          <td>Remote controller</td>
          <td><input type="radio" name="optionsRadios" id="A3" value="option1"></td>
          <td><input type="radio" name="optionsRadios" id="A3" value="option2"></td>
          <td><input type="radio" name="optionsRadios" id="A3" value="option3"></td>
          <td><input type="radio" name="optionsRadios" id="A3" value="option4"></td>
          <td><input type="radio" name="optionsRadios" id="A3" value="option5"></td>
        </tr>
        <tr>
          <td>Packaging</td>
          <td><input type="radio" name="optionsRadios" id="A1" value="option1"></td>
          <td><input type="radio" name="optionsRadios" id="A1" value="option2"></td>
          <td><input type="radio" name="optionsRadios" id="A1" value="option3"></td>
          <td><input type="radio" name="optionsRadios" id="A1" value="option4"></td>
          <td><input type="radio" name="optionsRadios" id="A1" value="option5"></td>
        </tr>
        <tr>
          <td>Price</td>
          <td><input type="radio" name="optionsRadios" id="A1" value="option1"></td>
          <td><input type="radio" name="optionsRadios" id="A1" value="option2"></td>
          <td><input type="radio" name="optionsRadios" id="A1" value="option3"></td>
          <td><input type="radio" name="optionsRadios" id="A1" value="option4"></td>
          <td><input type="radio" name="optionsRadios" id="A1" value="option5"></td>
        </tr>
      </tbody>
    </table>
    <button type="submit" class="button-x">submit <i class="pe-check-circle-o"></i></button>
  </div>
</div>


#### Other types of question

There are still other types of question which are not very common and hence we have not covered them in this article. `While currently we do not include other types into our system, it does not mean that we will not include them in the future`.

Should you need a specific type of question in particular, please let us know, and we will address your needs accordingly.
