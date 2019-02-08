import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coordinates: null,
    }
  }

  render() {
    return(<h1>Help me, Obi-Wan Kenobi. You’re my only hope.</h1>)
  };
}

export default App;
