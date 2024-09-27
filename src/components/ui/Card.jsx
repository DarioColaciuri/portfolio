import React from "react";
import "../css/card.css";

const Card = ({ title, information, preview, code }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="content">
        <p>{information}</p>
        <div className="buttons">
          <a title="Preview" target="_blank" href={preview}>
            <i className="bi bi-box-arrow-up-right"></i>
          </a>
          <a title="Code" target="_blank" href={code}>
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
