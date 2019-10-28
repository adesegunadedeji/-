import React from 'react';
import { connect} from 'react-redux';

class Counter extends React.Component {
  increment = () => {
   this.props.dispatch({ type: 'INCREMENT' });
  
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Counter {this.props.state.counter.count}</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span> {this.props.state.counter.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )}
}

function mapStateToProps(state) {
  console.log("THIS IS STATE", state)
  return {
    state
  };
}

export default connect(mapStateToProps)(Counter);