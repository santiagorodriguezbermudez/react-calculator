import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
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
    // console.log(`This is the buttonName on App component: ${buttonName}`);
    const newData = Calculate(this.state, buttonName);
    this.setState(newData);
  }

  render() {
    const { total, next } = this.state;

    return (
      <div className="app">
        <Display result={next || total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
