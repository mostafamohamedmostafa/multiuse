import React from "react";
import {Data1 } from  './Data'
export const Loop = (props) => {

  return (
    
    <div className="row  row-cols-1   ">
      {ClientsRatingData.map((ClientsRatingData, index) => {
        return (
          <div className="col-lg-3" key={index}>
            <div className="card h-100 mb-3">
              <img
                src={ClientsRatingData.Image}
                className="img-fluid rounded-start"
                alt={ClientsRatingData.ImageALt}
              />

              <div className="card-body">
                <p className="card-text">{ClientsRatingData.ClientStars}</p>
                <h2 className="card-title">{ClientsRatingData.ClinentName}</h2>
                <p className="card-text">{ClientsRatingData.ClientReview}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
