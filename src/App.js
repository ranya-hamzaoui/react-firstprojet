import React, { Component } from 'react';
import Header from './header'
import Listtodo from './listtodo'
import './App.css';
class App extends Component {
  constructor(props)
  {
      super(props)
      this.state=({
          text:""
      })
  }

  hettodo=(x)=>
  {
    this.setState({
      text:x
    })
  }
  render() {
    
    return (
      <div className="App">
      <h2>List To Do</h2>
      <Header hettodo={(x)=>this.hettodo(x)}/>
      <Listtodo text={this.state.text}/>
      </div>
      
    );
  }
}

export default App;
