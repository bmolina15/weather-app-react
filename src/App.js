import React, { Component } from 'react';
import './App.css';
import './components/dashboard/CardInfo.css'
import Header from './components/shared/Header';
import Main from './components/shared/Main';
import CardInfo from './components/dashboard/CardInfo';
import Api from './components/services/Api';
import CardDisplay from './components/dashboard/CardDisplay';
import FormNewCard from './components/dashboard/FormNewCard';
import Card from './components/dashboard/Card';



var weatherArray = [];

class App extends Component {
  constructor() {
    super();
    this.state = {
      savedCities: [

      ],
      isChanging: false
    }
    this.getCitiesLocalStorage = this.getCitiesLocalStorage.bind(this);
    this.saveCity = this.saveCity.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.eraseCityFromState = this.eraseCityFromState.bind(this);

  }

  getCitiesLocalStorage() {
    const citiesInStorage = localStorage.getItem('savedCities');
    const citiesInStorageJSON = JSON.parse(citiesInStorage);
    if (citiesInStorage !== null) {
      this.setState({ savedCities: citiesInStorageJSON });
    }
    console.log(citiesInStorage, 'this asjhkdhas')
  }

  componentDidMount() {
    this.getCitiesLocalStorage();
  }



  saveCity(data) {
    let newCities = [];

    const citiesInStorage = localStorage.getItem('savedCities');
    const citiesInStorageJSON = JSON.parse(citiesInStorage);

    if (citiesInStorage !== null) {

      newCities = citiesInStorageJSON
      newCities.push(data);
    } else {
      newCities.push(data);
    }
    this.setState({ savedCities: newCities });
    const newCitiesString = JSON.stringify(newCities);
    localStorage.setItem('savedCities', newCitiesString);

  }
  getWeather =async (e)=> {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await Api.getData(city, country);
    const codeAPI = await api_call.json();
    console.log(codeAPI,"sjkdhasdgasdg lo de la api aqui")
      if(codeAPI.cod!="404"){
      const data = { city: city, country: country };
      this.saveCity(data);
      console.log('dentro del if de 404')
      }else{
        alert("City not found");
      }

      console.log(e, 'se pasó del id del 404')
    }
    
  

  eraseCityFromState(city, country) {
    this.setState({ isChanging: true })
    const citiesInStorage = localStorage.getItem('savedCities');
    const citiesInStorageJSON = JSON.parse(citiesInStorage);
    const cityToDelete = { city: city, country: country };
    const newArray = citiesInStorageJSON.filter((city, i) => {
      return city.city != cityToDelete.city;
    });
    this.setState({ savedCities: newArray, isChanging: false });
    const newArrayStringify = JSON.stringify(newArray);
    localStorage.setItem('savedCities', newArrayStringify)
    window.location.reload();


  }



  render() {
    return (
      <div className="App" >
        <Header />
        <FormNewCard getWeather={this.getWeather} />
        <br />


        {(!this.state.isChanging) ? (<CardInfo
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
          eraseCityFromState={this.eraseCityFromState} />) : 'leel'}



      </div>
    );
  }
}

export default App;
