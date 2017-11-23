import React, { Component } from 'react';

export default 
     class Header extends Component {
        constructor(props) {
            super(props);
            this.props = props;
        }
        render() {
            return (<div><h2>{this.props.title}</h2></div>)
        }
    }

