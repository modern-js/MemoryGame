import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import Card from './Components/Card';
import shuffle from 'shuffle-array';
class App extends Component {
  constructor(){
    super();
    this.state ={
      easy: shuffle( [
        {character: 'a',flipState: false },
        {character: 'b',flipState: false },
        {character: 'a',flipState: false },
        {character: 'b',flipState: false },
        // {character: 'c',flipState: false },
        // {character: 'd',flipState: false },
        // {character: 'c',flipState: false },
        // {character: 'd',flipState: false },
      ]),
    count : 0, 
    guesses: []
    };
    this.defaultStates ={
        easy: shuffle( [
          {character: 'a',flipState: false },
          {character: 'b',flipState: false },
          {character: 'a',flipState: false },
          {character: 'b',flipState: false },
          {character: 'c',flipState: false },
          {character: 'd',flipState: false },
          {character: 'c',flipState: false },
          {character: 'd',flipState: false },
        ])
    };
  }

  renderCards(){
    return _.map(this.state.easy, (card, index) => <Card key={index} index={index} {...card}  flip = {this.flip.bind(this)}/>);
  }
  renderWon(){
    return(
      <h1> YOU WON </h1>
    );
  }
  reset(){
    console.log("Resetting...");
    this.setState({count: 0});
    let arr = this.state.easy;
    arr.forEach(function(element) {
      element.flipState= false;
    });
    this.setState({easy: arr, guesses:[]});
  }
  checkWinningConditions(){
    let guesses = this.state.guesses;
    console.log(guesses);
    if(guesses[0].character === guesses[1].character){
      let temp = this.state.easy.slice();
      _.remove(temp, {character: guesses[0].character});
      // temp.splice(guesses[0].index, 1);
      // temp.splice(guesses[1].index, 1);
      this.setState({easy: temp});
      console.log(this.state.easy);
      console.log(temp);
    }
  }
  flip(index)
  {
    const flip = this.state.easy;
    flip[index].flipState=!flip[index].flipState;
    // flip.splice(index, 1);
    this.setState({easy: flip});
    this.state.guesses.push({index: index, character: this.state.easy[index].character});
    // console.log(this.state.count);
    this.state.count++;
    if(this.state.count===2){
      this.checkWinningConditions();
      setTimeout(function() { this.reset(); }.bind(this), 1500);
    }

   
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to AubGames</h1>
        </header>
        {this.state.easy.length>1 ? this.renderCards(): this.renderWon()}
      </div>
      
    );
  }
}

export default App;
