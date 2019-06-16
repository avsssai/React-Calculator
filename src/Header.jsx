import React from 'react'

export default class Header extends React.Component{
    render(){
        return(
            <div className="container mt-4">
                    <div className="row justify-content-md-center">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <h3>Calculator App</h3>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
        )
    }
};