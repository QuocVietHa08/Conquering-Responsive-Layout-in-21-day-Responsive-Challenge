import React from 'react';
import classes from './Product.module.css';

function Product(props) {
  return (
    <div className={classes.Product}>
      <div className={classes.ImageHolder}>
        <img src={props.img}></img>
      </div>
      <div className={classes.productDesc}>
        <div>
          <div>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.Price}>
              <div className={classes.currentPrice}>{props.currentPrice}</div>
              <div className={classes.lastPrice}>{props.lastPrice}</div>
            </div>
          </div>

          <div className={classes.numberBuy}>
            <div className={classes.increase} onClick={props.increase}>
              +
            </div>
            <div className={classes.number}>{props.number}</div>
            <div className={classes.decrease} onClick={props.decrease}>
              -
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
