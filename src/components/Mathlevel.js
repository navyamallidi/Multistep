import React from 'react';
import arthematic from "../images/arthematic.jpg"
import basic from "../images/basicalgera.jpg"
import intermedite from "../images/arthematicalgebra.jpg"
import clcls from "../images/calclus.jpg"

export default function Mathlevel() {
  return (
    <div>
      <p>Choose the highest level you feel confident in - you can always adjust</p>

      <div className='btn'>

      <label htmlFor="radio1">
        <input type="radio" id="radio1" name="radiogroup1" /> Arthematic
        <img src={arthematic} alt="Arthematic" width={"116px"} />
        
      </label>
      
      <label htmlFor="radio2">
        <input type="radio" id="radio2" name="radiogroup1" /> Basic Algera
        <img src={basic} alt="Arthematic" width={"145px"} />
      </label>

      <label htmlFor="radio2">
        <input type="radio" id="radio2" name="radiogroup1" /> Intermedit Algera
        <img src={intermedite} alt="Arthematic" width={"160px"} />
      </label>

      <label htmlFor="radio2">
        <input type="radio" id="radio2" name="radiogroup1" /> Calclus
        <img src={clcls} alt="Arthematic" width={"150px"} />

      </label>

      </div>
    </div>
  );
}
