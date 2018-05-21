import React,{Component} from 'react';
import FormNewCard from './FormNewCard';
import Api from '../services/Api';

class CardInfo extends Component{

    getWeather=async(e)=>{
        e.preventDefault();
        const  city = e.target.elements.city.values;
        const country= e.target.elements.country.values;
        const api_call= await Api.getData(city,country);
        const data = await api_call.json();
        console.log(data);
        
    }


     render(){
        return(
            <div className="flex-container">
            <FormNewCard getWeather={this.getWeather}/>
            <div>
              {this.props.city&& this.props.country && <p>Location {this.props.city}, {this.props.country}</p>}
            {this.props.temperature && <p>Temperature {this.props.temperature}</p>}
           {this.props.humidity && <p> Humidity  {this.props.humidity}</p>}
            {this.props.description && <p> Description {this.props.description} </p>}

           </div> 
            
            </div>

        );
    }
}


export default CardInfo;
