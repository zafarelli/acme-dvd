import React, { Component } from 'react';

export default class Dvd extends Component {
    constructor (props){
      super(props);
      this.props = props
    }
  
    render(){
      return (
        <div className="dvd" onClick={()=>{console.log ("list click", this.props.dvd.title, this.props.dvd.tags)}}>
          <p>{this.props.dvd.title}</p>
        </div>
      );
    }
  }
  