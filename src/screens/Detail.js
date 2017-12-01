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

        const p = this.props;
        const onClickEdit = () => {this.setState({ readOnly: false })}

        const read = <DetailRead detail={p.detail} detailFunctions={p.detailFunctions} onClickEdit={onClickEdit.bind(this)}/>;
        const edit = <DetailEdit detail={p.detail} users={p.users} detailFunctions={p.detailFunctions}/>;
    
        return this.state.readOnly
            ? read
            : edit;
    }
}