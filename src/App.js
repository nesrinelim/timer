import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import './App.css';
import Count from './counter';



class App extends Component {
  constructor (props){
    super(props)
    this.state={time: 0,
    test: true}
    this.incr = this.incr.bind(this)
    this.reset=this.reset.bind(this)
   
  }
  // reset (){
  //   this.setState({
  //     time: 0,
  //   })
  //  clearInterval(this.state.i)
  // }
  
  // incr  () 
  // { if ((this.state.i)){return}
  // else{const i= setInterval(
  //   () => { 
  //     this.setState({
  //       time: this.state.time + 1000
  //     })
  // },
  //   1000
  // ) }


incr = () =>{
if (this.intervald){return}
this.intervald = setInterval(
    () => { 
      this.setState({
        time: this.state.time + 1000
      })
  },
    1000
  )
}
  stop = () =>
  {
    clearInterval(this.intervald)
  }

  reset = () => 
  {
  this.setState({time : 0})
  this.stop()
  }
  // }
  
  calculate_time(){
    let seconds = parseInt((this.state.time/1000)%60).toString(),
        minutes = parseInt((this.state.time/(1000*60))%60).toString(),
        hours = parseInt((this.state.time/(1000*60*60))).toString();
         return (hours.padStart(2,'0') + ':' + minutes.padStart(2,'0') + ':' + seconds.padStart(2,'0'));
   }
  
  render() {
   
    return (<div className="App">
       <Count sec={this.calculate_time()}/>
       <Button bsStyle="success"  onClick={this.incr}>Start</Button>
        <Button bsStyle="primary" onClick={this.reset}>Reset</Button>
        <Button bsStyle="primary" onClick={this.stop}>Resdfgdfgdfg</Button>
      </div>
    );
  }
}

export default App;
