import React, { Component } from 'react'
import Disciplined from './Disciplined.js'
import Gender from './Gender.js';
import Goal from './Goal.js'
import Age from './Age.js'

export default class Selections extends Component {
    constructor(){
        super()
        this.state = {
            gender: "",
            age: "",
            goal: "",
            disciplined: ""
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        const { name, value } = e.target;
        this.setState({
            [name] : value
        })
    }
    render() {
        const {gender, age, goal, disciplined} = this.state;
        console.log(this.state)
        return (
            <div id="selectionsDiv">
                <Gender handleChange={this.handleChange}
                            gender={gender}/>
                <Goal   handleChange={this.handleChange}
                            goal={goal}/>
                <Age    handleChange={this.handleChange}
                            age={age}/>
                <Disciplined handleChange={this.handleChange}
                            disciplined={disciplined}/>

                <div className="arrowButtonsDiv">
                    <button className='nextButton'
                        onClick={()=> this.props.history.push({
                            pathname: '/prep',
                            state: this.state
                        })}>Next&rarr;</button>
                </div>

            </div>
        )
    }
}
