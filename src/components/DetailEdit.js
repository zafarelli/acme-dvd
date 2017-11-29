import React, { Component } from 'react';
import Header from './Header'
const _ = require('lodash')

export default class DetailEdit extends Component {
    constructor(props) {
        super(props);
        this.props = props
        this.state = { selectedRating: props.detail.rating }
    }

    onRadioStatusChange(e, user) {
        this.props.detail.rating[user] = parseInt(e.target.value, 10)
        //const r = this.props.detail.rating[user]
        const r = this.state.selectedRating
        r[user] = parseInt(e.target.value, 10);
      //  r = parseInt(e.target.value, 10)
console.log ("change", r)
        this.setState({ selectedRating: r });
    }


    render() {
        const ratingCheckBoxes = [];
        _.reduce(this.props.detail.rating, (mem, key, user) => {
            ratingCheckBoxes.push(<label key={user+'label'}>{user}</label>)
            for (let i = 1; i < 6; i++) {
                const id = 'rating' + user + i;
                ratingCheckBoxes.push(
                    <label key={id}>
                        <input
                            key={id}
                            type='radio'
                            id={id}
                            name={'rating' +user + i}
                            checked={this.state.selectedRating[user] === i}
                            value={i}
                            onChange={(e) => { this.onRadioStatusChange(e, user) }} />
                        {i}
                    </label>)
            }
            ratingCheckBoxes.push (<br key={user+'br'}/>)
        }, [])

console.log ("render detailedit", this.state)

        return (<div className="detail">
            <Header title={this.props.detail.title} />
            <div style={{ clear: "both" }}>
                <p>{this.props.detail.tags.join(" / ")}</p>
            </div>
            <div>
                <p>Rating</p>
                <div style={{ margin: "0 auto", display: "inline-block" }}>
                    {ratingCheckBoxes}
                </div>

            </div>
            <div>
                <button onClick={this.props.detailFunctions.onClickClose}>Close</button>
                <button onClick={() => {
                    this.props.detailFunctions.onClickSave(this.props);
                    this.props.detailFunctions.onClickClose();
                }}>Save
                    </button>
            </div>
        </div>);

    }
}