import React from 'react';

// function App () {
  // return (
    // <React.Fragment>
      // <label htmlFor="bar">
        // bar
      // </label>
      // <input type="text" onChange={() =>{
        // console.log('test')
      // }} />
    // </React.Fragment>
  // );
// }

const App = () => {
  return (
    <React.Fragment>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  )
}

const Cat = () => {
  return (
    <p>Meow</p>
  )
}

export default App;
