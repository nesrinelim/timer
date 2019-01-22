import React, { Component } from 'react';

class Counter extends Component {
    


    render() { 
        const {sec}=this.props;
        return (<div>
            <header className="App-header">
        <p className="time">{sec}</p>
        
        <div className="bloc"><p className="text1">Hour</p><p className="text1">Minute</p><p className="text1">Second</p></div> 
        </header>
        </div>  );
    }
}
 
export default Counter;