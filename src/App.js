import React from 'react';
// import Input from './Input';
import Board from './Board';
import Header from './Header';
import './css/calculator.css';

class App extends React.Component{
  
  render(){
    return(
      <div className="calculator">
      <Header />
      {/* <Input/> */}
      <Board/>
    </div>
    )
  }
}

export default App;
