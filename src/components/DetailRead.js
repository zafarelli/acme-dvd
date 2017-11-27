import React, { Component } from 'react';
import Header from './Header'

export default class DetailRead extends Component {
    constructor(props) {
        super(props);
        this.props = props
    }


    render() {
        console.log ("read", this.props)
        const averageRating = _.reduce (this.props.detail.rating, (mem, r)=>{
            return mem + r;
        }, 0)
        return (<div className="detail">
            <Header title={this.props.detail.title} />
            <div>
                <p>Rating: {this.props.detail.rating.join(" / ")}</p>
                <p>{this.props.detail.tags.join(" / ")}</p>
            </div>
            <div>
                <button onClick={this.props.detailFunctions.onClickClose}>Close</button>
                <button onClick={this.props.onClickEdit}>Edit</button>

            </div>
        </div>);
    }
}