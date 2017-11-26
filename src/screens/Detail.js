import React, { Component } from 'react';

import DetailRead from '../components/DetailRead'
import DetailEdit from '../components/DetailEdit'

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {};
        this.state.readOnly = true;
        this.state.selectedRating = props.detail.rating;
    }

   

    render() {

        
        const onClickEdit = () => {this.setState({ readOnly: false })}

        const read = <DetailRead detail={this.props.detail} detailFunctions={this.props.detailFunctions} onClickEdit={onClickEdit.bind(this)}/>;
        const edit = <DetailEdit detail={this.props.detail} detailFunctions={this.props.detailFunctions}/>;
    
        return this.state.readOnly
            ? read
            : edit;
    }
}