import React, { Component } from 'react';
import Header from './Header'

export default class DetailEdit extends Component {
    constructor (props){
      super(props);
      this.props = props
      this.state = {selectedRating: props.detail.rating}
    }
  
    onRadioStatusChange(e) {
        this.props.detail.rating = parseInt(e.target.value, 10)
        this.setState({ selectedRating: parseInt(e.target.value, 10) });
    }


    render(){
    
        const ratingCheckBoxes = [];
        for (let i = 1; i < 6; i++) {
            const id = 'rating' + i;
            ratingCheckBoxes.push(
                <label key={i}>
                    <input
                        key={id}
                        type='radio'
                        id={id}
                        name='rating'
                        checked={this.state.selectedRating === i}
                        value={i}
                        onChange={this.onRadioStatusChange.bind(this)} />
                    {i}
                </label>)

        }

        return (<div className="detail">
            <Header title={this.props.detail.title} />
            <div>
                <p>Rating</p>
                <div style={{ margin: "0 auto", display: "inline-block" }}>
                    {ratingCheckBoxes}
                </div>
                <div style={{ clear: "both" }}>
                    <p>{this.props.detail.tags.join(" / ")}</p>
                </div>
            </div>
            <div>
                <button onClick={this.props.detailFunctions.onClickClose}>Close</button>
                <button onClick={() => {
                    this.props.detailFunctions.onClickSave(this.props);
                    this.props.detailFunctions.onClickClose();
                    }}>Save
                    </button>
            </div>
        </div>);

    }
}