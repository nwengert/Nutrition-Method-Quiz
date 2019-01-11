import React, { Component } from 'react'

export default class Result extends Component {
    //keep state here
    constructor() {
        super()
        this.state = {
            result: null,
        }
    }
    render(props) {
        // const { history } = this.props;
        const { result } = this.state;
        const selections = this.props.location.state
        // let youTubeLink = "";
        const Results = [
        {
            name: "",
            url: "",
            goal: "",
            gender: "",
            age: "",
            disciplined: ""
        },
        {
            name: "",
            url: "",
            goal: "",
            gender: "",
            age: "",
            disciplined: ""
        },
        {
            name: "",
            url: "",
            goal: "",
            gender: "",
            age: "",
            disciplined: ""
        },
        {
            name: "",
            url: "",
            goal: "",
            gender: "",
            age: "",
            disciplined: ""
        },
        {
            name: "",
            url: "",
            goal: "",
            gender: "",
            age: "",
            disciplined: ""
        },
        {
            name: "",
            url: "",
            goal: "",
            gender: "",
            age: "",
            disciplined: ""
        }
    ]
        return (
            <div id="resultBodyDiv">

                <h1>yippie kayay mf</h1>
                <h1>{this.state}</h1>
                <div className="arrowButtonsDiv">
                    <button className='restartButton'
                        onClick={() => this.props.history.push('/')}>Restart</button>
                        <div id="youTubeLinkDiv">
                        {/* <a href={youTubeLink} 
                            alt="You Tube link" id="youTubeLink"
                            target="_blank" rel="noopener noreferrer">
                            <div id="insideYouTubeLink">
                                <div id="triangle-right"></div>
                                {selections.prep} video
                            </div>
                        </a> */}
                    </div>
                </div>

            </div>
        )
    }
}
