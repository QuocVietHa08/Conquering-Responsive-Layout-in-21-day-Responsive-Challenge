import React, { Component } from 'react';
import classes from './App.module.css';
import Products from './Component/Products/Products';
import ContactInformation from './Component/Input/Input';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
  }
  IncreaseHandler = () => {
    this.setState({ number: this.state.number + 1 });
  };
  DecreaseHandler = () => {
    this.setState({ number: this.state.number - 1 });
  };
  render() {
    return (
      <div className={classes.App}>
        <Products
          className={classes.Products}
          number={this.state.number}
          increaseNumber={this.IncreaseHandler}
          decreaseNumber={this.DecreaseHandler}
        />
        <div className={classes.Infor}>
          <h1 style={{ fontSize: '3.5rem' }} className={classes.Checkout}>
            Checkout
          </h1>
          <ContactInformation />
        </div>
      </div>
    );
  }
}

export default App;
