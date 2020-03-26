import React from 'react';
import "./Person.css";

const person = (props) => {
return <div className="Person">
         <p>Я {props.name}!, Мне {props.age} лет</p>
         <p>{props.children}</p>
         <input type="text" onChange={props.changed} />
       </div>
};

export default person;