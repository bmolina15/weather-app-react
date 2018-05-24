import React, { Component } from 'react';
import FormNewCard from './FormNewCard';
import Api from '../services/Api';
import "./CardInfo.css";
import Card from './Card';
class CardInfo extends Component {
    constructor(props){
        super(props);
        this.state={}

this.eraseCityFromApp=this.eraseCityFromApp.bind(this);
    }


    eraseCityFromApp(city,country){
this.props.eraseCityFromState(city,country);

    }
    render() {
        return (
            <div className="flex-container">
                
                {
                    (this.props.savedCities.length > 0) ? (
                        this.props.savedCities.map((savedCity,i) => {
                            return (
                                <Card key={i} city={savedCity.city} country={savedCity.country} id={i} 
                                eraseCityFromApp={this.eraseCityFromApp}/>

                            )
                        })
                    ) : ''

                }



            </div>



        );
    }
}


export default CardInfo;
