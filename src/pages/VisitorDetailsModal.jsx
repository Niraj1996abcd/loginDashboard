import React from "react";
import styles from "../styles/VisitorDetailsModal.module.css";

const VisitorDetailsModal = ({ isOpen, onClose, visitorData }) => {
  if (!isOpen) return null;

  // Extract visitor data with fallbacks
  const {
    fullName = "",
    emailId = "",
    mobileNumber = "",
    host = "",
    purpose = "",
    branch = "",
    visits = [],
    companyName = "",
    accessories = "Laptop, Phone",
    idProof = {
      type: "Aadhar card",
      number: "30** **** **** **90",
    },
    visitorIdNumber = "123456",
  } = visitorData || {};

  // Get the first visit for display (if available)
  const firstVisit = visits && visits.length > 0 ? visits[0] : {};

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <h2 className={styles.modalTitle}>Visitor Details</h2>
        <button
          className={styles.closeButton}
          onClick={onClose}
          title="Close & Reset Data"
        >
          ×
        </button>

        <div className={styles.modalContent}>
          {/* Visitor Info */}
          <div className={styles.visitorInfo}>
            <div className={styles.avatarSection}>
              <div className={styles.avatar}>
                {/* Insert dummy profile image similar to screenshot */}
                <img src="https://i.pravatar.cc/300" alt="Visitor" />
              </div>
            </div>

            <div className={styles.mainInfo}>
              <h2 className={styles.visitorName}>{fullName}</h2>
              <p className={styles.visitingInfo}>Visiting: {host}</p>
              <p className={styles.meetingInfo}>Official Meeting: {purpose}</p>

              <div className={styles.statusSection}>
                <span className={styles.approvedBadge}>Approved</span>
                <span className={styles.statusDropdown}>▼</span>
              </div>
            </div>
          </div>

          {/* Visitor Details */}
          <div className={styles.detailsGrid}>
            <div className={styles.detailColumn}>
              <div className={styles.detailItem}>
                <p className={styles.detailLabel}>Email ID:</p>
                <p className={styles.detailValue}>{emailId}</p>
              </div>

              <div className={styles.detailItem}>
                <p className={styles.detailLabel}>Mobile Number:</p>
                <p className={styles.detailValue}>{mobileNumber}</p>
              </div>

              <div className={styles.detailItem}>
                <p className={styles.detailLabel}>Date of Meet:</p>
                <p className={styles.detailValue}>{firstVisit.date || "N/A"}</p>
              </div>

              <div className={styles.detailItem}>
                <p className={styles.detailLabel}>Time:</p>
                <p className={styles.detailValue}>{firstVisit.time || "N/A"}</p>
              </div>

              <div className={styles.detailItem}>
                <p className={styles.detailLabel}>Meeting Room:</p>
                <p className={styles.detailValue}>
                  {firstVisit.meetingRoom || "N/A"}
                </p>
              </div>

              <div className={styles.detailItem}>
                <p className={styles.detailLabel}>Company Name:</p>
                <p className={styles.detailValue}>{companyName || "XYZ"}</p>
              </div>

              <div className={styles.detailItem}>
                <p className={styles.detailLabel}>Accessories Carried:</p>
                <p className={styles.detailValue}>{accessories}</p>
              </div>
            </div>

            <div className={styles.detailColumn}>
              <div className={styles.detailItem}>
                <p className={styles.detailLabel}>Identity Proof:</p>
                <p className={styles.detailValue}>{idProof.type}</p>
              </div>

              <div className={styles.detailItem}>
                <p className={styles.detailLabel}>ID number:</p>
                <p className={styles.detailValue}>{idProof.number}</p>
              </div>

              <div className={styles.detailItem}>
                <p className={styles.detailLabel}>Visitor ID number:</p>
                <p className={styles.detailValue}>{visitorIdNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorDetailsModal;
