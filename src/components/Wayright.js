import React from 'react';
import imag from "../images/9352.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Wayright() {
  return (
    <div style={{ display: 'flex', alignItems: 'center'}}>
      <div style={{ marginLeft:'20%' , height: '600px' }} >
        <img src={imag} alt="Weight" style={{height:'400px'}} />
      </div>
      <div style={{ marginLeft: '0px' }}>
        <h1>You're on your way</h1>
        <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />

        <p>Brilliant! Get your hands on to help improve your professional skills and knowledge.</p>
        <p>You will interact with concepts and solve fun problems in maths, science, and computer science.</p>
        
      </div>
    </div>
  );
}
