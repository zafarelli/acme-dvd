import React, { Component } from 'react';
import Header from '../components/Header'

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (<div>
            <Header title={this.props.title} />
            <div>
                <p>Rating: {this.props.rating}</p>
            </div>
            <button onClick={()=>{console.log ("back! back")}}/>
        </div>
        )
    }
}