import React from 'react';
import ReactDOM from 'react-dom';

function MyApp(){
  return(
    <div>
      <h1>Rosiana Natalie</h1>
      <p>I am PhD Student of Singapore Management University</p>
      <ul>
        <li>Singapore</li>
        <li>Japan</li>
        <li>Taiwan</li>
      </ul>   
    </div>   
  )
}

ReactDOM.render(
  <MyApp />
  ,document.getElementById("root"))


