import React, { Component } from 'react';
const _ = require('lodash')

export default class UserSelect extends Component {
    constructor(props) {
        super(props);
        this.props = props     
    }

    render(){
        const dropdownEntries = _.map(this.props.users, (u)=>{console.log (u, u.name)
            return <option value={u.name} key={u.name}>{u.name}</option>
        })

        return <div className='userSelect'>
            <p>Select User</p>
            <select name="userSelect">{dropdownEntries}</select>
            <button onClick={()=>{return /*input.value*/}}/>
            </div>
    }
}