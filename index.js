const express = require('express');
const mongoose  = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
<form onSubmit={handleSubmit}>
<div>
  <label>Student WSU Access ID</label>
  <div>
    <Field
      name="accessID"
      component="input"
      type="text"
      placeholder="Ex: ab1234"
    />
  </div>
</div>
<div>
  <label>Language Course ID</label>
  <div>
    <Field
      name="languageID"
      component="input"
      type="text"
      placeholder="Ex: ELI5050"
    />
  </div>
</div>
<div>
  <label>Purpose of Visit</label>
  <div>
    <label>
      <Field name="dvd" component="input" type="checkbox" value="dvd" />{" "}
      Casette/CD/DVD Usage/Copying
    </label>
    <label>
      <Field name="can8" component="input" type="checkbox" value="can8" />{" "}
      CAN8
    </label>
    <label>
      <Field
        name="audio"
        component="input"
        type="checkbox"
        value="audio"
      />{" "}
      Listen to Audio For Course
    </label>
    <label>
      <Field
        name="video"
        component="input"
        type="checkbox"
        value="video"
      />{" "}
      Watch a Video For Course
    </label>
    <label>
      <Field name="net" component="input" type="checkbox" value="net" />{" "}
      General Internet Usage
    </label>
    <label>
      <Field name="scan" component="input" type="checkbox" value="scan" />{" "}
      Use The Scanner
    </label>
    <label>
      <Field name="tv" component="input" type="checkbox" value="tv" />{" "}
      Watch International TV
    </label>
    <label>
      <Field name="word" component="input" type="checkbox" value="word" />{" "}
      Use Office Suite (Word, Excel, etc.)
    </label>
    <label>
      <Field
        name="print"
        component="input"
        type="checkbox"
        value="print"
      />{" "}
      Use The Printer
    </label>
  </div>
</div>
<div>
  <button type="submit" disabled={pristine || submitting}>
    Submit
  </button>
  <button type="button" disabled={pristine || submitting} onClick={reset}>
    Clear Values
  </button>
</div>
</form>