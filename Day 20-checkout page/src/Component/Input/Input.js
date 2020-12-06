import React from 'react';
import classes from './Input.module.css';
import Email from './InputItem/Email/Email';
import Address from './Address/Address';
function Input() {
  return (
    <div className={classes.Input}>
      <p>Contact Information</p>
      <Email />

      <Address />
    </div>
  );
}

export default Input;
