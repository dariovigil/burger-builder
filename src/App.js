import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Burger Builder</h1>
        <Layout>
          <p>Test</p>
        </Layout>
      </div>
    );
  }
}

export default App;
