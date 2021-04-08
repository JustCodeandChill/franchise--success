import React from "react";

const FormField = ({ input, meta : {error, touched}, placeholder }) => {
  
  return (
    <div
      style={{
        width: "90%",
        border: "1px solid black",
        backgroundColor: "white",
        display: "inline-block",
        margin: "5px 10px",
      }}
    >
      <input {...input} placeholder={placeholder} />
      <div className="red-text">
      {touched && error}
      </div>
      
    </div>
  );
};

export default FormField;
