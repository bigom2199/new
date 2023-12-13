
import React from "react";
function AdCard({ advertisement, buttonClickHandler }) {
    return (
      <div className="card mb-4 col-md-4">
        <img
          className="card-img-top"
          src={advertisement.image}
          alt={advertisement.title}
        />
        <div className="card-body">
          <h5 className="card-title">{advertisement.title}</h5>
          <p className="card-text">{advertisement.description}</p>
          <p className="card-text">Contact: {advertisement.contact}</p>
        </div>
        <div className="card-footer text-center">
          <button
            className="btn btn-info btn-block"
            onClick={() => {
              buttonClickHandler(advertisement.contact);
            }}
          >
            Details
          </button>
        </div>
      </div>
    );
  }
  
  export default AdCard;