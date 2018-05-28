// import React,{Component} from 'react';
// import Card from '../dashboard/Card';
// import Modal from 'react-modal';
// import App from '../../App'

// class CardDetail extends Component{

//     constructor(props){
//         super(props);
        
//         this.state = {
//             modalIsOpen: false,
//             modalAlreadyOpen: false

//         };
//         this.openModal = this.openModal.bind(this);
//         this.closeModal = this.closeModal.bind(this);
//     }

//     openModal() {
//         if (this.state.modalAlreadyOpen === false)
//             this.setState({ modalIsOpen: true, modalAlreadyOpen: true });
//     }

//     closeModal() {

//         this.setState({ modalIsOpen: false, modalAlreadyOpen: false });

//     }

//     render(){
//         return(

//             <div >
// <Modal
//                     isOpen={this.state.modalIsOpen}

//                     onRequestClose={this.closeModal}
//                     className="modalstyle"
//                     contentLabel="Example Modal"
//                 >
//                     <button onClick={this.closeModal} > X </button>
//                     <p> DETAILS </p>
//                     {this.state.city && this.state.country && <p>Location {this.state.city}, {this.state.country}</p>}
//                     {this.state.temperature && <p>Temperature: {this.state.temperature} °C</p>}
//                     {this.state.mintemp && <p> Minimum Temperature: {this.state.mintemp} °C</p>}
//                     {this.state.maxtemp && <p> Maximum Temperature: {this.state.maxtemp} °C</p>}
//                     {this.state.windspeed && <p> Wind Speed: {this.state.windspeed} m/s</p>}
//                     {this.state.humidity && <p> Humidity: {this.state.humidity} %</p>}
//                     {this.state.description && <p> Description: {this.state.description} </p>}
//                     {this.state.icon && <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt="weathericon" />}

//                     {console.log(this.state.modalIsOpen)}

//                 </Modal>
                
//             </div>
//         );
//     }
// }

// export default CardDetail;
