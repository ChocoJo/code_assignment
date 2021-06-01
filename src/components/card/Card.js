import React from "react";
import "./Card.css";

export const Card = ({ employee, index }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-3">
      <div className="card">
        <div className="card-body">
          <div className="info-container">
            <h1
              className="card-title"
              tabIndex={index + 4}
              aria-label={`name ${employee.name}`}
            >
              {employee.name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
