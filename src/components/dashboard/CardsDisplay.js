import React, { Component } from 'react';
import Card from './Card';
import './CardsDisplay.css';
class CardsDisplay extends Component {


    constructor(props) {
        super(props);
        this.state = {
            savedCities: [
            ],
            isChanging: false
        }

        this.eraseCityFromApp = this.eraseCityFromApp.bind(this);
        this.getCitiesLocalStorage = this.getCitiesLocalStorage.bind(this);
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
    
    eraseCityFromApp(city, country) {
        this.eraseCityFromState(city, country);
    }

    eraseCityFromState(city, country) {
        this.setState({ isChanging: true })
        const citiesInStorage = localStorage.getItem('savedCities');
        const citiesInStorageJSON = JSON.parse(citiesInStorage);
        const cityToDelete = { city: city, country: country };
        const newArray = citiesInStorageJSON.filter((city, i) => {
          return city.city !== cityToDelete.city;
        });
        this.setState({ savedCities: newArray, isChanging: false });
        const newArrayStringify = JSON.stringify(newArray);
        localStorage.setItem('savedCities', newArrayStringify)
        window.location.reload();
   
      }
    render() {
        return (
            <div>
                <div className="flex-container">
                    {
                        (this.state.savedCities.length > 0) ? (
                            this.state.savedCities.map((savedCity, i) => {
                                return (
                                    <Card key={i} city={savedCity.city} country={savedCity.country} id={i}
                                        eraseCityFromApp={this.eraseCityFromApp} />
                                    )
                            })
                        ) : ''

                    }
                </div>
            </div>
        );
    }
}


export default CardsDisplay;
