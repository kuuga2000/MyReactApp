import React from 'react';

const person = (props) => {
return <div>
         <p>Я {props.name}!, Мне {props.age} лет</p>
         <p>{props.children}</p>
         <input type="text" onChange={props.changed} />
       </div>
};

export default person;