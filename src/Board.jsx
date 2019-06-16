import React from 'react';

import './css/BoardStyles.css';

export default class Board extends React.Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            item : '',
            equation : '',
            value:''
    
        }
    }
    handleClick = (value)=>{
        console.log('clicked with value' + value);
    }
    pusher = (event)=>{
        event.preventDefault();
        var num = event.target.value;
        var eq = this.state.equation;
        eq += num;
        this.setState({
            equation: eq
        })
        console.log(this.state.equation);
    }
    percentageHandle = ()=>{
        var number = this.state.equation;
        number = number/100;
        this.setState({equation:number});
    }
    onChange = (event)=>{
        this.setState({
            value:event.target.value
        })
        console.log(this.state.value);
    }
    evaluate = ()=>{
       var answer =  eval(this.state.equation);
       this.setState({equation:answer,
        value:''
        });
        console.log(answer);
    }
    clear =()=>{
        this.setState({
            equation:''
        })
    }
    render(){
        return(
            
            <div className="board">
                <div className="input-field">
                <div className="container mt-4">

                    <div className="row justify-content-center">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="input-group input-group-lg">
                                <input type="text" className='form-control' onChange={this.onChange} value={this.state.equation} />
                            </div>
                        </div>
                        <div className="col-2"></div>  
                    </div>
                </div>
            
            </div>
                <div className="container mt-4">
                    <div className="row justify-content-md-center">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="row justify-content-md-center">
                                <div className="col">
                                    <button className="btn btn-secondary" value={'('} onClick={this.pusher}>(</button>
                                    <button className="btn btn-secondary" value={')'} onClick={this.pusher}>)</button>
                                    <button className="btn btn-secondary" value={'%'} onClick={this.percentageHandle}>%</button>
                                    <button className="btn btn-secondary" onClick={this.clear}>AC</button>
                                </div>
            
            
                            </div>
                            <div className="container">
                                <div className="row justify-content-md-center">
                                    <div className="col">
            
                                        <button className="btn btn-light btn-lg" value={7} onClick={this.pusher} >7</button>
                                        <button className="btn btn-light btn-lg" value={8} onClick={this.pusher}>8</button>
                                        <button className="btn btn-light btn-lg" value={9} onClick={this.pusher}>9</button>
                                        <button className="btn btn-danger btn-lg" value={'/'} onClick={this.pusher}>/</button>
                                    </div>
            
                                </div>
                                <div className="row justify-content-md-center">
                                    <div className="col">
                                        <button className="btn btn-light btn-lg" value={4} onClick={this.pusher}>4</button>
                                        <button className="btn btn-light btn-lg" value={5} onClick={this.pusher}>5</button>
                                        <button className="btn btn-light btn-lg" value={6} onClick={this.pusher}>6</button>
                                        <button className="btn btn-danger btn-lg" value={'*'} onClick={this.pusher}>x</button>
            
                                    </div>
            
            
                                </div>
                                <div className="row justify-content-md-center">
                                    <div className="col">
                                        <button className="btn btn-light btn-lg"value={1} onClick={this.pusher}>1</button>
                                        <button className="btn btn-light btn-lg"value={2} onClick={this.pusher}>2</button>
                                        <button className="btn btn-light btn-lg"value={3} onClick={this.pusher}>3</button>
                                        <button className="btn btn-danger btn-lg" value={'-'} onClick={this.pusher}>-</button>
                                    </div>
            
            
                                </div>
                                <div className="row justify-content-md-center">
                                    <div className="col">
                                        <button className="btn btn-light btn-lg" value={0} onClick={this.pusher}>0</button>
                                        <button className="btn btn-light btn-lg">.</button>
                                        <button className="btn btn-primary btn-lg" onClick={this.evaluate}>=</button>
                                        <button className="btn btn-danger btn-lg" value={'+'} onClick={this.pusher}>+</button>
                                    </div>
            
            
                                </div>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
            
                </div>
            </div>
        )
    }
}