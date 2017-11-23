import React, { Component } from 'react';
import Header from './components/Header'
import DvdList from './components/DvdList'
import './App.css';

const _ = require('lodash')


const data = {dvds:
[{title: "Gangs of New York", rating: 5, tags:["Action", "Historisch"]},
{title: "Full Metal Jacket", rating: 5, tags: ["Action", "WW2"]},
{title: "Walking Dead S1", rating: 5, tags: ["Post Apoc", "Zombies"]},
{title: "Walking Dead S2", rating: 5, tags: ["Post Apoc", "Zombies"]},
{title: "Walk the Line", rating: 5, tags: ["Frauenfilm", "Drama"]}

]}



class App extends Component {
  constructor(){
    super();
    this.state = data;
    this.tags = _.union (
        _.reduce(data.dvds, (mem,d)=>{console.log (d)
        return mem.concat (d.tags);
      }, [])
    );
    console.log (this.tags)
  }

  render() {
    const list = this.state.dvds.map ((dvd, i)=>{ 
      return (<DvdList dvd={dvd} key={i}/>);
    })

    return (
      <div className="App">
        <Header title="DVD List"/>
        {list}   
      </div>
    );
  }
}

export default App;
