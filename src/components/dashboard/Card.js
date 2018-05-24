import React, { Component } from 'react';
import FormNewCard from './FormNewCard';
import Api from '../services/Api';
import "./CardInfo.css";
class Card extends Component {


constructor(props){
    super(props);
    this.state={
        temperature:'',
        city: '',
        country: '',
        humidity: '',
        description: '',
        icon:'',
        error: ''
    }


    this.deleteCity=this.deleteCity.bind(this);
}

getData = async (city,country) => {
    const api_call = await Api.getData(city, country);
    const data = await api_call.json();
    console.log(data);
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

componentDidMount(){
    this.getData(this.props.city,this.props.country);
}

deleteCity(){
this.props.eraseCityFromApp(this.props.city,this.props.country);
}


    render() {
        return (
        <div className='card'>
            <button onClick={this.deleteCity}>X</button>
            {this.state.city && this.state.country && <p>Location {this.state.city}, {this.state.country}</p>}
            {this.state.temperature && <p>Temperature {this.state.temperature}</p>}
            {this.state.humidity && <p> Humidity  {this.state.humidity}</p>}
            {this.state.description && <p> Description {this.state.description} </p>}

            {this.state.icon && <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt="weathericon" />}
           

        </div>
        )
}

}
export default Card;
