import React, { Component } from 'react';

class Counter extends Component {
    
    // constructor (props){
    //     super (props);
        
    //     this.state={test :false,
    //          timer_s :0,
    //         timer_m :0,
    //         timer_h :0}
    //         setInterval(
    //             () => {
    //                 if (this.state.test=== true)
    //               this.setState({
    //                 timer_s: this.state.timer_s + 1
    //               })
        
    //               if (this.state.timer_s === 5){
    //                 this.setState({  
    //                 timer_m: this.state.timer_m +1,
    //                 timer_s: 0 })
    //             }
    //             if(this.state.timer_m === 5){
    //                 this.setState({
    //                     timer_m:0,
    //                     timer_h: this.state.timer_h +1
    //                 })
    //             }
    //             },
    //             1000
    //           ) 
      
    //  }
    //     incr () {
    //         this.setState({
    //            test : true
               
    //         })
           
    //     }
    render() { 
        const {sec}=this.props;
        return (<div>
            <header className="App-header">
        <p className="time">{sec}</p>
        {/* <span>{this.state.timer_h}:{this.state.timer_m}:{this.state.timer_s}</span> */}
        <div className="bloc"><p className="text1">Hour</p><p className="text1">Minute</p><p className="text1">Second</p></div> 
        
        </header>
        </div>  );
    }
}
 
export default Counter;