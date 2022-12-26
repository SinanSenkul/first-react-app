import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    constructor(props) {
        super(props);
    }
        render(){
            return (
                <div>
                    <i class={this.props.num}></i>
                </div>
            )
        }
    }

export default Die;