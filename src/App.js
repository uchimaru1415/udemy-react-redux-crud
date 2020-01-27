import React, { Component } from 'react';

const App = () => {
  return (
    <Counter>
    </Counter>
  )
}

class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = { count: 0 }
  }
  handlePlusButton = () => {
    const count = this.state.count
    this.setState({ count: count + 1 })
  }
  handleMinusButton = () => {
    const count = this.state.count
    this.setState({ count: count - 1 })
  }
  render () {
    console.log(this.state)
    return (
      <React.Fragment>
        <div>counter: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
