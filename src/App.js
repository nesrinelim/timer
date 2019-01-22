import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import './App.css';
import Count from './counter';
 let time=3600000;


class App extends Component {
  calculate_time(){
    let seconds = parseInt((time/1000)%60).toString(),
        minutes = parseInt((time/(1000*60))%60).toString(),
        hours = parseInt((time/(1000*60*60))).toString();
         return (hours.padStart(2,'0') + ':' + minutes.padStart(2,'0') + ':' + seconds.padStart(2,'0'));
   }
  
  render() {
   
    return (<div className="App">
       <Count sec={this.calculate_time()}/>
       <Button bsStyle="success">Start</Button>
       <Button bsStyle="primary">Reset</Button>
      </div>
    );
  }
}

export default App;
