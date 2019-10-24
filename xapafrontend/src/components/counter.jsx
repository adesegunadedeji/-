import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
    // fill in later
  }

  decrement = () => {
    // fill in later
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.counter}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

// Add this function: Container
function mapStateToProps(state) {
    return {
      count: state.count
    };
  }

// export default Counter;
// Replaced With this:
export default connect(mapStateToProps)(Counter);