import React, { Component } from 'react';
const _ = require('lodash')

export default class DvdList extends Component {
    constructor (props){
      super(props);
      this.props = props
    }
  
 
    render(){

      const averageRating = _.reduce (this.props.dvd.rating, (mem, r)=>{
        return mem + r
      },0) /_.keys(this.props.dvd.rating).length
      
//const averageRating = 4
      return (
        <div className="dvdlist" onClick={this.props.onClick.bind(this)}>
          <p>{this.props.dvd.title} ({averageRating.toFixed(1)})</p>
        </div>
      );
    }
  }
  