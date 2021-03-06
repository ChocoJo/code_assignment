import React from "react";
import "./Card.css";
import no_profile_pic from '../../utils/images/no_profile_pic.png';
import sweden from '../../utils/images/flag/sweden.png';
import slovenia from '../../utils/images/flag/slovenia.png';
import { SocialMedia } from "../socialmedia/SocialMedia";

export const Card = ({ employee, index }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-3">
      <div className="card" tabIndex={index + 4}>
        <div className="card-body">

          { employee.imagePortraitUrl !== null ? (<span className="portrait-container">
          <img className="card-img" alt={employee.name} src={employee.imagePortraitUrl} tabIndex={index + 4}/>
          </span>) : ( 
             <span className="portrait-container">
          <img className="card-img-no-profile" tabIndex={index + 4} alt={employee.name} src={no_profile_pic} />
          </span>)}

          <div className="info-container">
          <h1 className="card-title" tabIndex={index + 4}>
            {employee.name}
          </h1>
         { employee.office !== 'Ljubljana' ?
         (<span className="office-location" tabIndex={index + 4}> <img className="flag-icon" src={sweden} alt={`flag of sweden ${employee.office}`}/> {employee.office}
          </span>) : (<span className="office-location" tabIndex={index + 4}><img className="flag-icon" src={slovenia} alt={`flag of slovenia ${employee.office}`}/><span>{employee.office}</span>
          </span>)}
          </div>
          <SocialMedia employee={employee} index={index}/>
        </div>
      </div>
    </div>
  );
};