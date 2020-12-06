import React from 'react';
import classes from './Product.module.css';
import Product from './Product/Product';
import img1 from '../../assest/image/photo1.png';
import img2 from '../../assest/image/photo2.png';

function Products(props) {
  return (
    <div className={classes.Products}>
      <Product
        number={props.number}
        img={img1}
        title={'Vintage Backbag'}
        currentPrice={'$54.99'}
        increase={props.increaseNumber}
        decrease={props.decreaseNumber}
        lastPrice={'$94.99'}
      />
      ;
      <Product
        number={props.number}
        img={img2}
        title={'Vintage Backbag'}
        currentPrice={'$54.99'}
        increase={props.increaseNumber}
        decrease={props.decreaseNumber}
        lastPrice={'$94.99'}
      />
      ;
      <div className={classes.totalPrice}>
        <div>
          <p>Shipping</p>
          <p>$19</p>
        </div>
        <div>
          <p>Total</p>
          <p>$148.98</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
