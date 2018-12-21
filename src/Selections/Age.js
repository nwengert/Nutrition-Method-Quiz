import React, { Component } from 'react'

export default class Age extends Component {
    render() {
        return (
            <div id="ageDiv">
                <h4>How old are you?</h4>
                <input checked={this.props.age === "18-30"}
                    onChange={this.props.handleChange}
                    type="radio" 
                    className="age_radio_item" 
                    name="age" 
                    value="18-30" 
                    id="age_radio1"/>
                    <label className="age_label_item" id="age1" 
                    htmlFor="age_radio1">18 - 30</label>
                <input checked={this.props.age === "31-55"}
                    onChange={this.props.handleChange}
                    type="radio" 
                    className="age_radio_item" 
                    name="age" 
                    value="31-55" 
                    id="age_radio2"/>
                    <label className="age_label_item" id="age2" 
                    htmlFor="age_radio2">31 - 55</label>
                <input checked={this.props.age === "55+"}
                    onChange={this.props.handleChange}
                    type="radio" 
                    className="age_radio_item" 
                    name="age" 
                    value="55+" 
                    id="age_radio3"/>
                    <label className="age_label_item" id="age3" 
                    htmlFor="age_radio3">55 +</label>
            </div>
        )
    }
}
