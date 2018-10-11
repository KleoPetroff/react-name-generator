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
      name: '',
      fetching: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (e.key !== 32 && this.state.fetching) return;

    this.setState({fetching: true});
    fetchName().then(name => {
      this.setState({
        fetching: false,
        name,
        gradient: generateGradient(gradients)
      })
    })
      .catch(() => this.setState({fetching: false}));
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
