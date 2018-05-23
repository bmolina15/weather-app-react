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
      temperature: '',
      city: '',
      country: '',
      humidity: '',
      description: '',
      icon:'',
      error: ''
    }
    //this.obtainChildrenData=this.obtainChildrenData.bind(this);
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await Api.getData(city, country);
    const data = await api_call.json();
    console.log(city);
    console.log(data);
    
    var savedData={
      temperature:data.main.temp,
      city:data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon:data.weather[0].icon

    }
   

    localStorage.setItem("stored",JSON.stringify(savedData));
    console.log(localStorage.getItem("stored"));
    var savedData=JSON.parse(localStorage.getItem("stored"));

    console.log(savedData);
    weatherArray.push(savedData);
    //array with all the objects

console.log(weatherArray);
if(!localStorage.getItem('stored')){
  populateStorage();
}else{
  setStorage();
}



    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon:data.weather[0].icon,
      error: ''
    })

  }


  render() {
    return (
      <div className="App">
        <Header />
        <FormNewCard getWeather={this.getWeather} />
        
        <CardInfo temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          icon={this.state.icon}
          error={this.state.error} />
          
          
        
      </div>
    );
  }
}

export default App;
