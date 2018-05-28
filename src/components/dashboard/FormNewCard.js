import React,{Component} from 'react';
import Api from '../services/Api';
import './Form.css';

class Form extends Component{

    
    constructor(){
        super();
        this.state={
            savedCities:[

            ],
            isChanging:false
        }
        this.getWeather = this.getWeather.bind(this);
        this.saveCity = this.saveCity.bind(this);
     }

    getWeather =async (e)=> {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await Api.getData(city, country);
        const codeAPI = await api_call.json();
        console.log(codeAPI)
          if(codeAPI.cod!=="404"){
          const data = { city: city, country: country };
          this.saveCity(data);
          window.location.reload();
          }else{
            alert("City not found");
          }
         
    
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


    
    render(){
        return(
           <form onSubmit={this.getWeather}>

               <input type ="text" name="city" placeholder= "Introduce city" required/>
               <input type ="text" name="country" placeholder= "Introduce country" required/>
               <button className="submit">ADD CITY</button>
           </form>
        );
    }
};
export default Form;