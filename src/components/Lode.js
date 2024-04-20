import React, { useState, useEffect } from 'react';
import rolling from "../images/rolling.gif";
import { useNavigate } from 'react-router-dom';


export default function Lode() {
  const [text, setText] = useState('');
  const [showImg, setShowImg] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImg(false);
      navigate("/Learn");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='center' style={{marginTop: "20%"}}>
      {showImg ? (
        <>
          <img src={rolling} alt="rolling" width={"116px"} />
          <h1>'Finding learning path recommendations for you based on your response'</h1>
        </>
      ) : (
        <h3>{text}</h3>
      )}
    </div>
  );
}
