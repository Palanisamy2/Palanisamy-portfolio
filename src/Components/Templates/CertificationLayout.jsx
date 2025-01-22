import React from 'react';
import styles from '../assert/css/Modules/certification.module.css';

export default function CertificationLayout({certificateDetail, CertificateLogo}) {
  return (
    <>
        <div className={styles['Certificate']}>
            <div className={styles['Certificate-logo']}>
                <img src={CertificateLogo} />
            </div>
            <h2>{certificateDetail.CourseName || "No Course name"}</h2>
            <h3>Completion Date : {certificateDetail.CompletionDate || "Completed Date"}</h3> 
            <p>
                {certificateDetail.Paragraph || "About the course completion"}
            </p>
            <button> View Certificate </button>
        </div>
    </>
  )
}
