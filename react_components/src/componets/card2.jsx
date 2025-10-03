import React from "react";

function MyCard({ id, title, body }) {
  return (
    <div className="card shadow-sm mb-4" style={{ width: "100%", maxWidth: "400px", borderRadius: "12px" }}>
     
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <a href="#" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default MyCard;
