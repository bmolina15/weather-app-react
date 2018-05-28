import React,{Component} from 'react';
import Api from '../services/Api';
import './Form.css';

class Form extends Component{

    


    
    render(){
        return(
           <form onSubmit={this.props.getWeather}>

               <input type ="text" name="city" placeholder= "city" required/>
               <input type ="text" name="country" placeholder= "country" required/>
               <button class="submit">get weather</button>
           </form>
        );
    }
};
export default Form;