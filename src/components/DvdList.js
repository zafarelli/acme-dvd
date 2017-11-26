import React, { Component } from 'react';

export default class DvdList extends Component {
    constructor (props){
      super(props);
      this.props = props
    }
  
 
    render(){
      return (
        <div className="dvdlist" onClick={this.props.onClick.bind(this)}>
          <p>{this.props.dvd.title} ({this.props.dvd.rating})</p>
        </div>
      );
    }
  }
  