import React, { useState } from "react";

function Opselect({ emoji,bold, text }) {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <div className="Center">
      <div
        className="Opdiv"
        onClick={handleSelect}
        style={{
          display: 'flex',
          alignItems: 'center',
          border: selected ? '2px solid seagreen' : '2px solid grey',
          boxShadow: selected ? '-moz-initial' :'none',
          borderRadius: '5%',
          padding: '4px',
          margin: '10px auto',
          cursor: 'pointer'
        }}
      >
        <span style={{ fontSize: '30px', marginRight: '10px', marginLeft: '5px', textAlign: 'center' }}>{emoji}</span>
        <span className="font-bold" style={{ textAlign: 'left', marginLeft: '5px' }}>{bold}</span>
        <span style={{ textAlign: 'left', marginLeft: '5px' }}>{text}</span>
      </div>
    </div>
  );
}

export default Opselect;
