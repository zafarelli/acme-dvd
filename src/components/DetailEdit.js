import React, { Component } from 'react';
import Header from './Header'
import UserSelect from './UserSelect'
const _ = require('lodash')

export default class DetailEdit extends Component {
    constructor(props) {
        super(props);
        this.props = props
        this.state = { selectedRating: props.detail.rating }
    }

    onRadioStatusChange(e, user) {
        this.props.detail.rating[user] = parseInt(e.target.value, 10)
        // todo neuen User auslesen
        const r = this.state.selectedRating
        r[user] = parseInt(e.target.value, 10);
        this.setState({ selectedRating: r });
    }

    onUserAdded() {
        this.setState({ newUser: true });
    }

    newUserAdded(e) {
        console.log("hooray, new user", e.target)
        this.setState({ newUser: false })
    }

    render() {
        const userSelect = this.state.newUser
            ? <UserSelect users={this.props.users} okFunction={this.newUserAdded.bind(this)} />
            : null;



        const ratingCheckBoxes = [];
        _.reduce(this.props.detail.rating, (mem, key, user) => {
            ratingCheckBoxes.push(<label key={user + key + 'label'}>{user}</label>)
            for (let i = 1; i < 6; i++) {
                const id = 'rating' + user + i;
                ratingCheckBoxes.push(
                    <label key={id}>
                        <input
                            key={id}
                            type='radio'
                            id={id}
                            name={id}
                            checked={this.state.selectedRating[user] === i}
                            value={i}
                            onChange={(e) => { this.onRadioStatusChange(e, user) }} />
                        {i}
                    </label>)
            }
            ratingCheckBoxes.push(<br key={user + 'br'} />)
        }, [])

        return (<div className="detail">
            <Header title={this.props.detail.title} />
            {userSelect}
            <div style={{ clear: "both" }}>
                <p>{this.props.detail.tags.join(" / ")}</p>
            </div>
            <div>
                <div><p style={{ display: "inline" }}>Rating</p><button onClick={this.onUserAdded.bind(this)}>+</button></div>
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