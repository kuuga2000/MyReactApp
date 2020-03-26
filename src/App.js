import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name:'Uga',age:118},
      {name:'Lee',age:12}
    ],
    showPersons: false
  }

  swithNameHandler = () => {
    this.setState({
      persons:[
        {name:'Uga xx',age:118},
        {name:'Lee zz',age:12}
      ]
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      persons:[
        {name:event.target.value,age:118},
        {name:event.target.value,age:12}
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render(){ console.log(this.state.showPersons)
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
           {this.state.persons.map((person,index) => {
             return <Person 
                click={()=>this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age} 
                changed={this.changeNameHandler}>Мой хобби, играю в игру</Person>
           })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>привет</h1>
        <button onClick={this.togglePersonsHandler}>Switch Button</button>
        {persons}
      </div>
    );
  }
}

export default App;
