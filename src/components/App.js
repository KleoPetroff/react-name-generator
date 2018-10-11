import React, {Component} from 'react';
import './App.css';

import gradients from '../helpers/data/gradients';
import generateGradient from '../helpers/generateClass';
import fetchName from '../helpers/fetch';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      gradient: generateGradient(gradients),
      name: ''
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (e.keyCode === 32) {
      fetchName().then(name => {
        this.setState({name});
        this.setState({gradient: generateGradient(gradients)});
      });
    }
  }

  componentDidMount() {
    fetchName().then(name => this.setState({name}));

    window.addEventListener('keyup', this.onClick, false);
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
