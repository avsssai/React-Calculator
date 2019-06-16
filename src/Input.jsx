import React from 'react';
import './styles.css';

export default class Input extends React.Component {
    render(){
        return(
            <div className="input-field">
                <div className="container mt-4">

                    <div className="row justify-content-center">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="input-group input-group-lg">
                                <input type="text" className='form-control'/>
                            </div>
                        </div>
                        <div className="col-2"></div>  
                    </div>
                </div>
            
            </div>
        )
    }
}