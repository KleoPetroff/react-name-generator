import React, {Component} from 'react';
import './App.css';

import gradients from '../helpers/data/gradients';
import getRandomName from '../helpers/generateClass';
import fetch from '../helpers/fetch';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      gradient: getRandomName(gradients),
      name: ''
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (e.keyCode === 32) {
      fetch().then(name => {
        this.setState({name});
        this.setState({gradient: getRandomName(gradients)});
      });
    }
  }

  componentDidMount() {
    fetch().then(name => this.setState({name}));

    window.addEventListener('keydown', this.onClick, false);
  }

  render() {
    if (!this.state.name) {
     return <div className={`${this.state.gradient} wrapper`} />;
    }

    return (
      <div className={`${this.state.gradient} wrapper`}>
        <div className="centered">
          <div className="name">{this.state.name.name} {this.state.name.surname}</div>
          <div>Press Spacebar</div>
        </div>
      </div>
    )
  }
}