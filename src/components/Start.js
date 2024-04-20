import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Description from './Description';
import Interestin from './Interestin';
import Mathlevel from './Mathlevel';
import Righttemplate from './Righttemplate';
import Wayright from './Wayright';
import './styles.css'; // Import external CSS file

export default function Start() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const Titles = [
    "Which describes you the best?",
    "Which are you most interested in?",
    "",
    "What is your comfort level in maths",
    ""
  ];

  const pageDisplay = () => {
    if (page === 0) { return <Description />; }
    else if (page === 1) { return <Interestin />; }
    else if (page === 2) { return <Righttemplate />; }
    else if (page === 3) { return <Mathlevel />; }
    else if (page === 4) { return <Wayright />; }
  }

  let percentage = ((page + 1) / Titles.length) * 100 + "%";

  return (
    <div className='form'>
      <div className='progressbar'>
        <div
          hidden={page === Titles.length}
          style={{ width: percentage }}
        ></div>
      </div>
      <div className='form-container'>
        <div className='header'>
        <h1 className="text-2xl font-bold">{Titles[page]}</h1>
        </div>
        <div className='body'>{pageDisplay()}</div>
        <div className='footer'>
          <button
            className='continue-button' // Apply the class for styling
            disabled={page === Titles.length}
            hidden={page === Titles.length}
            onClick={() => {
              setPage(currPage => currPage + 1);
              if (page === Titles.length - 1) {
                navigate("/load");
              }
            }}
          >
            {page === Titles.length ? "Continue" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  )
}
