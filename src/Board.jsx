import React from 'react';

import './css/BoardStyles.css';

export default class Board extends React.Component{
    render(){
        return(
            <div className="board">
                <div className="container mt-4">
                    <div className="row justify-content-md-center">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="row justify-content-md-center">
                                <div className="col">
                                    <div className="btn btn-secondary">(</div>
                                    <div className="btn btn-secondary">)</div>
                                    <div className="btn btn-secondary">%</div>
                                    <div className="btn btn-secondary">AC</div>
                                </div>
            
            
                            </div>
                            <div className="container">
                                <div className="row justify-content-md-center">
                                    <div className="col">
            
                                        <div className="btn btn-light btn-lg">7</div>
                                        <div className="btn btn-light btn-lg">8</div>
                                        <div className="btn btn-light btn-lg">9</div>
                                        <div className="btn btn-danger btn-lg">/</div>
                                    </div>
            
                                </div>
                                <div className="row justify-content-md-center">
                                    <div className="col">
                                        <div className="btn btn-light btn-lg">4</div>
                                        <div className="btn btn-light btn-lg">5</div>
                                        <div className="btn btn-light btn-lg">6</div>
                                        <div className="btn btn-danger btn-lg">x</div>
            
                                    </div>
            
            
                                </div>
                                <div className="row justify-content-md-center">
                                    <div className="col">
                                        <div className="btn btn-light btn-lg">1</div>
                                        <div className="btn btn-light btn-lg">2</div>
                                        <div className="btn btn-light btn-lg">3</div>
                                        <div className="btn btn-danger btn-lg">-</div>
                                    </div>
            
            
                                </div>
                                <div className="row justify-content-md-center">
                                    <div className="col">
                                        <div className="btn btn-light btn-lg">0</div>
                                        <div className="btn btn-light btn-lg">.</div>
                                        <div className="btn btn-primary btn-lg">=</div>
                                        <div className="btn btn-danger btn-lg">+</div>
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