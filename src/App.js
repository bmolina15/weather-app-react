import React, { Component } from 'react';
import './App.css';
import Header from './components/shared/Header';
import FormNewCard from './components/dashboard/FormNewCard';
import CardsDisplay from './components/dashboard/CardsDisplay';


class App extends Component {
  constructor() {
    super();
    this.state = {
      savedCities: [
      ],
      isChanging: false
    }

  }

  render() {
    return (
      <div className="App" >
        <Header />
        <FormNewCard getWeather={this.props.getWeather} />
        <br />
        {(!this.props.isChanging) ? (<CardsDisplay
          savedCities={this.state.savedCities}
          temperature={this.state.temperature}
          maxtemp={this.state.maxtemp}
          mintemp={this.state.mintemp}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          icon={this.state.icon}
          error={this.state.error}
          eraseCityFromState={this.eraseCityFromState} />) : ''}

       </div>
    );
  }
}

export default App;
