import React from 'react';
import classes from './Email.module.css';
import { MdEmail } from 'react-icons/md';
import { ImPhone } from 'react-icons/im';
function Email(props) {
  return (
    <div className={classes.InputItem}>
      <div>
        <div className={classes.title}>Email</div>
        <div className={classes.input}>
          <MdEmail className={classes.logo} />
          <p>Enter your email</p>
        </div>
      </div>
      <div>
        <div className={classes.title}>Phone</div>
        <div className={classes.input}>
          <ImPhone className={classes.logo} />
          <p>Enter your Phone</p>
        </div>
      </div>
    </div>
  );
}

export default Email;
