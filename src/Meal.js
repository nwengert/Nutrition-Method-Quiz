import React, { Component } from 'react'

export default class Meal extends Component {
    //keep state here
    constructor() {
        super()
        this.state = {
            meal: null,
        }
    }
    render() {
        // const { history } = this.props;
        const { meal } = this.state;
        const selections = this.props.location.state
        let youTubeLink = "";
        return (
            <div id="mealBodyDiv">

                <h1>yippie kayay mf</h1>

            </div>
        )
    }
}
