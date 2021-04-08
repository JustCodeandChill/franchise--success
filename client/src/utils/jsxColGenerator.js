import React from 'react';

export default (text, value, isBreak=true) => {
    if (value === "" || value === "0" || value === null) return null;
    else {
      if (isBreak) {
        return (
          <div className="center col s12 m6 l3" style={{font:'1.5rem', marginBottom:'5px'}}>
            <span style={{ fontWeight: "bold" }}>
              {text}
              <br/>
              {value}
            </span>
            <br />
          </div>
        );
      }else {
        return (
          <div style={{font:'1.5rem', marginBottom:'5px'}}>
            <span style={{ fontWeight: "bold" }}>
              {text}
              {value}
            </span>
            <br />
          </div>
        );
      }
      
    }
  };