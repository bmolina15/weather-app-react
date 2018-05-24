import React, { Component } from 'react';
import './App.css';
import Header from './components/shared/Header';
import Main from './components/shared/Main';
import CardInfo from './components/dashboard/CardInfo';
import Api from './components/services/Api';
import CardDisplay from './components/dashboard/CardDisplay';
import FormNewCard from './components/dashboard/FormNewCard';

var weatherArray=[];

class App extends Component {
  constructor() {
    super();
    this.state = {
      savedCities:[
        
      ],
     isChanging:false
    }
    this.getCitiesLocalStorage=this.getCitiesLocalStorage.bind(this);
    this.saveCity=this.saveCity.bind(this);
    this.getWeather=this.getWeather.bind(this);
    this.eraseCityFromState=this.eraseCityFromState.bind(this);

  }

  getCitiesLocalStorage(){
    const citiesInStorage = localStorage.getItem('savedCities');
    const citiesInStorageJSON=JSON.parse(citiesInStorage);
    if(citiesInStorage!==null){
      this.setState({savedCities:citiesInStorageJSON});
    }
   console.log(citiesInStorage,'this asjhkdhas')  
  }

  componentDidMount(){
    this.getCitiesLocalStorage();
  }
  
  saveCity(data){
let newCities=[];
    const citiesInStorage = localStorage.getItem('savedCities');
    const citiesInStorageJSON=JSON.parse(citiesInStorage);
    
    if(citiesInStorage!==null){
      
       newCities=citiesInStorageJSON
       newCities.push(data);
    }else{
      newCities.push(data);
    }
    this.setState({savedCities:newCities});
    const newCitiesString=JSON.stringify(newCities);
    localStorage.setItem('savedCities',newCitiesString);
    
  }
getWeather(e){
  e.preventDefault();
  const city = e.target.elements.city.value;
   const country = e.target.elements.country.value;
   const data={city:city,country:country};
   this.saveCity(data);
}

eraseCityFromState(city,country){
  this.setState({ isChanging:true})
    const citiesInStorage = localStorage.getItem('savedCities');
    const citiesInStorageJSON=JSON.parse(citiesInStorage);
    const cityToDelete= {city:city,country:country};
const newArray = citiesInStorageJSON.filter((city,i) =>{ 
console.log(cityToDelete,city);

  return city.city!=cityToDelete.city;
});
console.log(newArray,'leeeel');

this.setState({savedCities:newArray,isChanging:false});


}



  render() {
    return (
      <div className="App" >
        <Header />
        <FormNewCard getWeather={this.getWeather} />
        
        {(!this.state.isChanging)?(<CardInfo 
        savedCities={this.state.savedCities}
        temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          icon={this.state.icon}
          error={this.state.error}
          eraseCityFromState={this.eraseCityFromState} />):'leel'}
        
          
          
        
      </div>
    );
  }
}

export default App;
