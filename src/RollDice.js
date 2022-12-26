import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 'fas fa-dice-three fa-10x',
            num2: 'fas fa-dice-one fa-10x',
            buttonVal: 'Roll Dice!',
            buttonClassName: 'roll-button-nonanimate',
            buttonDisabled: false,
            dieStyle: 'die-container'
        }
        this.roll = this.roll.bind(this);
        this.animate = this.animate.bind(this);
    }
    rButton = document.getElementById("rollButton");
    animate() {
        this.setState({
            buttonVal: "Rolling...", 
            buttonClassName: 'roll-button-animate', 
            buttonDisabled: true,
            dieStyle: 'animated wobble'
        });
        setTimeout(this.roll, 500);
    }
    roll() {
        var nums = [
            'fas fa-dice-one fa-10x', 'fas fa-dice-two fa-10x', 'fas fa-dice-three fa-10x',
            'fas fa-dice-four fa-10x', 'fas fa-dice-five fa-10x', 'fas fa-dice-six fa-10x'
        ]
        var ranNum1 = nums[Math.round(Math.random() * 5)];
        var ranNum2 = nums[Math.round(Math.random() * 5)];
        this.setState({ 
            num1: ranNum1, 
            num2: ranNum2, 
            buttonVal:"Roll Dice!", 
            buttonClassName:"roll-button-nonanimate", 
            buttonDisabled: false,
            dieStyle: 'die-container'
        });
    }
    render() {
        return (
            <div className='main-container'>
                <div className='dice-container'>
                    <div className={this.state.dieStyle}>
                        <Die num={this.state.num1} />
                    </div>
                    <div className={this.state.dieStyle}>
                        <Die num={this.state.num2} />
                    </div>
                </div>
                <div>
                    {/* <input type="button" onClick={this.roll}  value="Roll Dice!" id="rollButton"></input> */}
                    <button onClick={this.animate} id="rollButton" className={this.state.buttonClassName} disabled={this.state.buttonDisabled}>{this.state.buttonVal}</button>
                </div>
            </div>
        )
    }
}

export default RollDice;