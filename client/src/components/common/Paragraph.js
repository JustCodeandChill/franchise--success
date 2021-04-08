import React from "react";

const Paragraph = ({ data }) => {
  const { title, body } = data;
  return (
    <div>
      <h4
        className="center"
        style={{ fontWeight: "700", marginBottom: "20px" }}
      >
        {title}
      </h4>
      <p className="center" style={{marginBottom:'20px'}}>{body}</p>
    </div>
  );
};

export default Paragraph;
