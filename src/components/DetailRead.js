import React, { Component } from 'react';
import Header from './Header'
const _ = require('lodash')

export default class DetailRead extends Component {
    constructor(props) {
        super(props);
        this.props = props
    }


    render() {
        console.log("read", this.props)

        const names = _.reduce(this.props.detail.rating, (mem, r, key) => {
            mem.push(key)
            mem.push(<br key={"name" + key}></br>)
            return mem
        }, [])
        const namesEl = <div className="detailReadNames">{names}</div>

        const ratings = _.reduce(this.props.detail.rating, (mem, r, key) => {
            mem.push(r)
            mem.push(<br key={"rating" + r + key}></br>)
            return mem
        }, [])
        const ratingEl = <div className="detailReadRatings">{ratings}</div>


        return (<div className="detail">
            <Header title={this.props.detail.title} />
            <div>
                <p>{this.props.detail.tags.join(" / ")}</p>
                <div>
                    {namesEl}
                    {ratingEl}
                    <div>
                    <button onClick={this.props.detailFunctions.onClickClose}>Close</button>
                    <button onClick={this.props.onClickEdit}>Edit</button>

                </div>
                </div>
               
            </div>

        </div>);
    }
}