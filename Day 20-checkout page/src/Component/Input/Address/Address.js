import React from 'react';
import classes from './Address.module.css';
import { CgProfile } from 'react-icons/cg';
import { AiFillHome } from 'react-icons/ai';
import { MdLocationCity } from 'react-icons/md';
import { RiQrCodeLine } from 'react-icons/ri';
function Address() {
  return (
    <div className={classes.Address}>
      <h2>Shipping address</h2>
      <div>
        <div className={classes.title}>Full name</div>
        <div className={classes.input}>
          <CgProfile className={classes.logo} />
          <p>Rodney Cotton</p>
        </div>
      </div>
      <div>
        <div className={classes.title}>Address</div>
        <div className={classes.input}>
          <AiFillHome className={classes.logo} />
          <p>Your address</p>
        </div>
      </div>
      <div>
        <div className={classes.title}>City</div>
        <div className={classes.input}>
          <MdLocationCity className={classes.logo} />
          <p>Your city</p>
        </div>
      </div>
      <div className={classes.InputContainer}>
        <div>
          <div className={classes.title}>Country</div>
          <div className={classes.input}>
            <MdLocationCity className={classes.logo} />
            <p>Your country</p>
          </div>
        </div>
        <div>
          <div className={classes.title}>Postal code</div>
          <div className={classes.input}>
            <RiQrCodeLine className={classes.logo} />
            <p>Your postal code</p>
          </div>
        </div>
      </div>
      <div className={classes.AddressFooter}>
        <div>
          <input type='checkbox' />
          <p>Save this information for next</p>
        </div>

        <button>Continue</button>
      </div>
    </div>
  );
}

export default Address;
