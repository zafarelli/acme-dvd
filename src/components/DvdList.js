import React, { Component } from 'react';
import Detail from '../screens/Detail'

export default class Dvd extends Component {
    constructor (props){
      super(props);
      this.props = props
    }
  
    onClick(){
        
    }

    render(){
      return (
        <div className="dvdlist" onClick={this.onClick}>
          <p>{this.props.dvd.title}</p>
        </div>
      );
    }
  }
  