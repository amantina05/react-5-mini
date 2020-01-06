import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, undo, redo } from './ducks/counter';

class Counter extends Component {
  render() {
    const {
      currentValue,
      futureValue,
      previousValue,
      increment,
      decrement,
      undo,
      redo,
    } = this.props;
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{currentValue}</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={() => increment(1)}
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={() => increment(5)}
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={() => decrement(1)}
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={() => decrement(5)}
            >
              -5
            </button>
            <br />
            <button
              className="counter__button"
              disabled={previousValue.length === 0}
              onClick={undo}
            >
              Undo
            </button>
            <button
              className="counter__button"
              disabled={futureValue.length === 0}
              onClick={redo}
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </section>
      </div>
    );
  }
}
//connecting the counter component to redux
//using mapStateToProps function that takes in state & returns state
const mapStateToProps = state => state;
// placing the action creators on counters props
export default connect(mapStateToProps, { increment, decrement, undo, redo })(
  Counter
);
