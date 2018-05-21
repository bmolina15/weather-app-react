import React, { Component } from 'react';
import './App.css';
import Header from './components/shared/Header';
import Main from './components/shared/Main';
//import FormNewCard from './components/dashboard/FormNewCard'

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <Header/>
        
        <Main/>
      </div>
    );
  }
}

export default App;
