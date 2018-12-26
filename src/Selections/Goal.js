import React, { Component } from 'react'

export default class Goal extends Component {
    render() {
        // console.log(this.state)
        return (
            <div id="goalDiv">
                <h2>What is your primary goal?</h2>

                <input checked={this.props.goal === "improve"}
                    onChange={this.props.handleChange}
                    type="radio" 
                    className="goal_radio_item" 
                    name="goal" 
                    value="improve" 
                    id="goal_radio1"/>
                    <label className="goal_label_item" id="goal1" 
                    htmlFor="goal_radio1">Improve digestion, bloating, headache</label>

                <input checked={this.props.goal === "lose weight"}
                    onChange={this.props.handleChange}
                    type="radio" 
                    className="goal_radio_item" 
                    name="goal" 
                    value="lose weight" 
                    id="goal_radio2"/>
                    <label className="goal_label_item" id="goal2" 
                    htmlFor="goal_radio2">Lose weight</label>

                <input checked={this.props.goal === "more energy"}
                    onChange={this.props.handleChange}
                    type="radio" 
                    className="goal_radio_item" 
                    name="goal" 
                    value="more energy" 
                    id="goal_radio3"/>
                    <label className="goal_label_item" id="goal1" 
                    htmlFor="goal_radio3">More energy</label>

                <input checked={this.props.goal === "brain health"}
                    onChange={this.props.handleChange}
                    type="radio" 
                    className="goal_radio_item" 
                    name="goal" 
                    value="brain health" 
                    id="goal_radio4"/>
                    <label className="goal_label_item" id="goal2" 
                    htmlFor="goal_radio4">Brain health</label>
                    
            </div>
        )
    }
}
