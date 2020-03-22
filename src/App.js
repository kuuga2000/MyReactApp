import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>привет</h1>
        <Person name="Uga" age="18">Мой хобби, играю в игру</Person>
        <Person name="Lee" age="12">Мой хобби, сматю филмь</Person>
      </div>
    );
  }
}

export default App;
