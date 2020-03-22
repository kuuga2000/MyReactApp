import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name:'Uga',age:118},
      {name:'Lee',age:12}
    ]
  }

  swithNameHandler = () => {
    this.setState({
      persons:[
        {name:'Uga xx',age:118},
        {name:'Lee zz',age:12}
      ]
    })
  }

  render(){
    return (
      <div className="App">
        <h1>привет</h1>
        <button onClick={this.swithNameHandler}>Switch Button</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Мой хобби, играю в игру</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Мой хобби, сматю филмь</Person>
      </div>
    );
  }
}

export default App;
