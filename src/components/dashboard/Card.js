import React, { Component } from 'react';
import FormNewCard from './FormNewCard';
import Api from '../services/Api';
import "./CardInfo.css";
import Modal from 'react-modal';
import App from '../../App'
import CardDetail from '../detail/CardDetail';


Modal.setAppElement('#root')
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
        pressure:'',
        maxtemp:'',
        mintemp:'',
        windspeed:'',
        error: ''
    }
    this.state = {
        modalIsOpen: false,
        modalAlreadyOpen:false
        
    };


        this.deleteCity=this.deleteCity.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
}
openModal() {
    if(this.state.modalAlreadyOpen===false)
    this.setState({ modalIsOpen: true,modalAlreadyOpen:true });
}

 
  closeModal() {
      
   
    this.setState({modalIsOpen: false, modalAlreadyOpen:false});
   
}

getData = async (city,country) => {
    const api_call = await Api.getData(city, country);
    const data = await api_call.json();
    
    console.log(data);
    if(data.cod=="404"){
        this.setState({
            error:'City not found  :CCCCC' 
        });
        console.log("no hay nada ")  ;
    }
    else if(city&&country&&data.cod!='404'){
    this.setState({
      
    temperature: data.main.temp,
    city: data.name,
    country: data.sys.country,
    humidity: data.main.humidity,
    description: data.weather[0].description,
    maxtemp: data.main.temp_max,
    mintemp: data.main.temp_min,
    windspeed:data.wind.speed,
    icon:data.weather[0].icon,
    error: ''
    });
    }else{
       
        this.setState({
            error:'Nothing to geocode'
        })
        
    }return data;

}

componentDidMount(){
    this.getData(this.props.city,this.props.country);
}

deleteCity(){
    if(this.state.modalIsOpen===false)
    this.closeModal();
this.props.eraseCityFromApp(this.props.city,this.props.country);
}


    render() {
        return (
            
        <div className="card" onClick={this.openModal}>
            <button onClick={this.deleteCity}>X</button>
            {this.state.city && this.state.country && <p> {this.state.city}, {this.state.country}</p>}
            {this.state.temperature && <p> {this.state.temperature} °C</p>}
            {this.state.description && <p>  {this.state.description} </p>}

            {this.state.icon && <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt="weathericon" />}
            
            
                <Modal 
                    isOpen={this.state.modalIsOpen}
                    
                    onRequestClose={this.closeModal}
                    className="modalstyle"
                    contentLabel="Example Modal"
                >
                <button onClick={this.closeModal} > X </button>
               <p> DETAILS </p> 
                {this.state.city && this.state.country && <p>Location {this.state.city}, {this.state.country}</p>}
            {this.state.temperature && <p>Temperature: {this.state.temperature} °C</p>}
           {this.state.mintemp && <p> Minimum Temperature: {this.state.mintemp} °C</p>}
           {this.state.maxtemp && <p> Maximum Temperature: {this.state.maxtemp} °C</p>}
           {this.state.windspeed && <p> Wind Speed: {this.state.windspeed} m/s</p>}
            {this.state.humidity && <p> Humidity: {this.state.humidity} %</p>}
            {this.state.description && <p> Description: {this.state.description} </p>}
            {this.state.icon && <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt="weathericon" />}
                
                {console.log(this.state.modalIsOpen)}
              
                </Modal>

        </div>
        );
}

}
export default Card;
