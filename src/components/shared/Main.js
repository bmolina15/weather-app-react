import React,{Component} from 'react';
import FormNewCard from '../dashboard/FormNewCard';
import CardDisplay from '../dashboard/CardDisplay'


class Main extends Component{
    render(){
        return(
            <div>
                <CardDisplay/>
                <FormNewCard />
            </div>
        );
    }
}

export default Main;