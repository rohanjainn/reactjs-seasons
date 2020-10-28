import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{

    constructor(props){
        super(props);
        
        //this is only time we do direct assignment to this.state
        this.state={lat:null,errorMessag:''};

    }

    componentDidMount(){
      
        window.navigator.geolocation.getCurrentPosition(
            position=>this.setState({lat:position.coords.latitude}),
            err=>this.setState({errorMessag:err.message})            
        );
    }

    componentDidUpdate(){

        
    }

    //we have to define render
    render(){
        if(this.state.errorMessag && !this.state.lat){
            return <div>Error : {this.state.errorMessag}</div>
        }
        else if(this.state.lat && !this.state.errorMessag){
            return <div>Latitude :{this.state.lat}</div>
        }
        else
            return<div>Loading!</div>
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));
