import React, { Component } from 'react';
import Header from './components/Header'
import DvdList from './components/DvdList'
import Detail from './screens/Detail'
import './App.css';

const _ = require('lodash')


const data = {dvds:
[{title: "Gangs of New York", rating: 5, tags:["Action", "History"]},
{title: "Full Metal Jacket", rating: 5, tags: ["Action", "WW2"]},
{title: "Walking Dead S1", rating: 5, tags: ["Post Apoc", "Zombies"]},
{title: "Walking Dead S2", rating: 5, tags: ["Post Apoc", "Zombies"]},
{title: "Walk the Line", rating: 5, tags: ["Chick Flick", "Drama"]},
{title: "Operation Petticoat", rating: 5, tags: ["Comedy", "U Boat", "WW2", "Classic"]}

]}


class App extends Component {
  constructor(){
    super();
    this.state = data;
    this.state.tags = _.union (
        _.reduce(data.dvds, (mem,d)=>{console.log (d)
        return mem.concat (d.tags);
      }, [])
    );
    this.state.detailIndex = -1;
    
  }

  openDetail(e,dvd,i){
    console.log ("open Detail", e, dvd,i)
    this.setState ({detailIndex:i});
  }

  render() {
    console.log ("render", this.state)
    const list = this.state.dvds.map ((dvd, i)=>{ 
      return (<DvdList dvd={dvd} key={i} onClick={(e)=>{this.openDetail(e,dvd,i)}}/>);
    })

    const detailView = this.state.detailIndex >= 0
      ? <Detail detail={this.state.dvds[this.state.detailIndex]} onClick={()=>{console.log ("close");this.setState({detailIndex:-1})}}/>
      : null;

    return (
      <div className="App">
        <Header title="DVD List"/>
        {list}   
        {detailView}
      </div>
    );
  }
}

export default App;
