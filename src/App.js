import React, { Component } from 'react';

import './App.css';

// import 'dv4all-base-web-components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Test Stencil web component</h1>
          <dv4-market-cap-stock-price />
          {/* <dv4-loader data-type="packman" />*/}
        </header>
      </div>
    );
  }
}

export default App;
