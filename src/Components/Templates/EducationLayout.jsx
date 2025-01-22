import React from 'react';
import styles from '../assert/css/Modules/Education.module.css';  // Corrected import for CSS Module

export default function EducationLayout({ educationDetails, logoSrc }) {
  return (
    <div className={styles['Edusec']}>
        <div className={styles['UG-section']}>
          <div className={styles['UG-logo']}>
              <img src={logoSrc} alt={`${educationDetails.collegename} logo`} />
          </div>
          <div className={styles['UG-details']}>
              <h1>{educationDetails.Board || "Not specified"}</h1>
              <h2>{educationDetails.collegename || "Not specified"}</h2>
              <h3>{educationDetails.course || "Course not specified"}</h3>
              <h3>{educationDetails.StartYear || "Start Year"} - {educationDetails.EndYear || "End Year"}</h3>
              <h3>Percentage : {educationDetails.Percentage || "Not specified"}</h3>
          </div>
        </div>
    </div>
  );
}
