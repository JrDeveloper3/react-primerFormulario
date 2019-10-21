import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from './Form';
import './style.css';

class App extends Component {
  constructor(){
    this.state = {
      name: 'React'
    }
  }
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
