import React, { Component } from 'react';
import FormNewCard from './FormNewCard';
import Api from '../services/Api';
import "./CardInfo.css";
class CardInfo extends Component {

    

    populateStorage = async (e) => {
        
    
      }

    render() {
        return (
            <div className="flex-container">
                {this.props.city&&
                <div className="card">
                    {this.props.city && this.props.country && <p>Location {this.props.city}, {this.props.country}</p>}
                    {this.props.temperature && <p>Temperature {this.props.temperature}</p>}
                    {this.props.humidity && <p> Humidity  {this.props.humidity}</p>}
                    {this.props.description && <p> Description {this.props.description} </p>}

                    {this.props.icon&& <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="weathericon" />}

                </div>
                }
                {this.props.city&&
                <div className="card">
                    {this.props.city && this.props.country && <p>Location {this.props.city}, {this.props.country}</p>}
                    {this.props.temperature && <p>Temperature {this.props.temperature}</p>}
                    {this.props.humidity && <p> Humidity  {this.props.humidity}</p>}
                    {this.props.description && <p> Description {this.props.description} </p>}

                    {this.props.icon&& <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="weathericon" />}

                </div>
                }
                {this.props.city&&
                <div className="card">
                    {this.props.city && this.props.country && <p>Location {this.props.city}, {this.props.country}</p>}
                    {this.props.temperature && <p>Temperature {this.props.temperature}</p>}
                    {this.props.humidity && <p> Humidity  {this.props.humidity}</p>}
                    {this.props.description && <p> Description {this.props.description} </p>}

                    {this.props.icon&& <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="weathericon" />}

                </div>
                }
                {this.props.city&&
                <div className="card">
                    {this.props.city && this.props.country && <p>Location {this.props.city}, {this.props.country}</p>}
                    {this.props.temperature && <p>Temperature {this.props.temperature}</p>}
                    {this.props.humidity && <p> Humidity  {this.props.humidity}</p>}
                    {this.props.description && <p> Description {this.props.description} </p>}

                    {this.props.icon&& <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="weathericon" />}

                </div>
                }

                


                </div>
                
            

        );
    }
}


export default CardInfo;
