import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const newData = Calculate(this.state, buttonName);
    this.setState(newData);
  }

  render() {
    return (
      <div className="app">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
