import React from 'react';
import maths from "../images/maths.gif";
import './Learningpath.css';

export default function Learningpath() {
  return (
    <div style={{marginTop: "15%"}}>
      <h2>Learning path based on your response</h2>
      <p>Choose one to get started. You can switch any time.</p>
      <div className='learning-path-container'>
        <div className='btns'>
          <label htmlFor="radio1">
            <input type="radio" id="radio1" name="radiogroup1" />
            <div className="option-container">
              <span style={{width:"200px", fontWeight: "bold"}}>Foundational Math</span>
              <span>Build your foundational skills in algebra, geometry, and probability</span>
              <img src={maths} alt="icon" width={"116px"} />
            </div>
          </label>
          
          <label htmlFor="radio2">
            <input type="radio" id="radio2" name="radiogroup1" />
            <div className="option-container">
              <span style={{width:"200px", fontWeight: "bold"}}>Mathematical Thinking</span>
              <span>Build your foundational skills in algebra, geometry, and probability.</span>
              <img src={maths} alt="icon" width={"116px"} />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
