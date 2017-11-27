import React, { Component } from 'react';
import Header from './components/Header'
import DvdList from './components/DvdList'
import Detail from './screens/Detail'
import './App.css';

const _ = require('lodash')


const data = {
  dvds:
    [{ title: "Gangs of New York", rating: {"Jens":5, "Sabine":5}, tags: ["Action", "History"] },
    { title: "Full Metal Jacket", rating: {"Jens":5, "Sabine":3}, tags: ["Action", "WW2"] },
    { title: "Walking Dead S1", rating: {"Jens":5, "Sabine":5}, tags: ["Post Apoc", "Zombies"] },
    { title: "Walking Dead S2", rating: {"Jens":4, "Sabine":5}, tags: ["Post Apoc", "Zombies"] },
    { title: "Walk the Line", rating: {"Jens":4, "Sabine":4}, tags: ["Chick Flick", "Drama"] },
    { title: "Operation Petticoat", rating: {"Jens":4, "Sabine":5}, tags: ["Comedy", "U Boat", "WW2", "Classic"] }
    ],
    users:{"Jens":{name:"Jens"}, "Sabine":{name:"Sabine"}}
}


class App extends Component {
  constructor() {
    super();
    this.state = data;
    this.state.tags = _.union(
      _.reduce(data.dvds, (mem, d) => {
        return mem.concat(d.tags);
      }, [])
    );
    this.state.detailIndex = -1;

  }

  openDetail(e, dvd, i) {
    console.log("open Detail", dvd, i)
    this.setState({ detailIndex: i });
  }

  render() {
    const list = this.state.dvds.map((dvd, i) => {
      return (<DvdList dvd={dvd} key={i} onClick={(e) => { this.openDetail(e, dvd, i) }} />);
    })

    const detailFunctions = {
      onClickClose: () => { this.setState({ detailIndex: -1 }) },
      onClickSave: (changedEntry) => {
        console.log("save", changedEntry)
        let changed = this.state.dvds.slice(0);
        changed[this.state.detailIndex] = changedEntry; // todo dirty dirty
        this.setState({ data: changed })
      }
    }

    const detailView = this.state.detailIndex >= 0
      ? <Detail detail={this.state.dvds[this.state.detailIndex]} 
              detailFunctions={detailFunctions}
         //     className="detailopening"
              />
      : null;

    return (
      <div className="App">
        <Header title="DVD List" />
        {list}
        {detailView}
      </div>
    );
  }
}

export default App;
