
import React from 'react';

const Service = (props) => {
const {course,img,price,detail}=props.course


    return (
        
        <div className="col-md-6 mb-3">
        <div className="card-deck border border-primary">
        <div className="card">
        <img className="card-img-top" src={img} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{course}</h5>
          <p className="card-text">{detail}</p>
          <h3 className="card-text">Course Fee:{price}</h3>
        </div>
      </div>
      </div>
      </div>
    );
};

export default Service;