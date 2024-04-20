import React from 'react';
import weight from "../images/weight.jpg";

export default function Righttemplate() {
  return (
    <div style={{ display: 'flex', alignItems: 'center'}}>
      <div style={{ marginLeft:'20%' , height: '600px' }} >
        <img src={weight} alt="Weight"/>
      </div>
      <div style={{ marginLeft: '0px' }}>
        <h1>You're in the right place</h1>
        <p>Brilliant! Get your hands on to help improve your professional skills and knowledge.</p>
        <p> You will interact with concepts and solve fun problems in maths, science, and computer science.</p>
      </div>
    </div>
  );
}
