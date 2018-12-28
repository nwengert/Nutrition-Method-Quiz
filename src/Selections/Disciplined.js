import React, { Component } from 'react'

export default class Disciplined extends Component {
    render() {
        return (
            <div id="disciplinedDiv">
                <h2>Do you do well with extreme discipline?</h2>
                <input checked={this.props.disciplined === "Yes"}
                    onChange={this.props.handleChange}
                    type="radio" 
                    className="disciplined_radio_item" 
                    name="disciplined" 
                    value="Yes" 
                    id="disciplined_radio1"/>
                    <label className="disciplined_label_item" id="disciplined1" 
                    htmlFor="disciplined_radio1">Yes</label>
                <input checked={this.props.disciplined === "No"}
                    onChange={this.props.handleChange}
                    type="radio" 
                    className="disciplined_radio_item" 
                    name="disciplined" 
                    value="No" 
                    id="disciplined_radio2"/>
                    <label className="disciplined_label_item" id="disciplined2" 
                    htmlFor="disciplined_radio2">No</label>
                <input checked={this.props.disciplined === "sometimes"}
                    onChange={this.props.handleChange}
                    type="radio" 
                    className="disciplined_radio_item" 
                    name="disciplined" 
                    value="sometimes" 
                    id="disciplined_radio3"/>
                    <label className="disciplined_label_item" id="disciplined2" 
                    htmlFor="disciplined_radio3">Sometimes</label>
            </div>
        )
    }
}
