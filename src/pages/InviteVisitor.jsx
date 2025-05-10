import React, { useState } from "react";
import styles from "../styles/InviteVisitor.module.css";
import { MdOutlineDelete } from "react-icons/md";
import VisitorDetailsModal from "./VisitorDetailsModal";

const InviteVisitor = () => {
  const [inviteTab, setInviteTab] = useState("single");
  const [recurrence, setRecurrence] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  // Create formData state to store all inputs
  const [formData, setFormData] = useState({
    mobileNumber: "",
    fullName: "",
    emailId: "",
    purpose: "",
    entryPoint: "",
    host: "",
    branch: "",
    vehicle: "",
    vehicleNumber: "",
  });

  const [visits, setVisits] = useState([
    { date: "", visitDay: "", time: "", meetingRoom: "" },
    { date: "", visitDay: "", time: "", meetingRoom: "" },
  ]);

  // Handle change for main form fields
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle change for visits array
  const handleVisitChange = (index, field, value) => {
    const updatedVisits = [...visits];
    updatedVisits[index][field] = value;
    setVisits(updatedVisits);
  };

  const handleAddRow = () => {
    setVisits([
      ...visits,
      { date: "", visitDay: "", time: "", meetingRoom: "" },
    ]);
  };

  const handleRemoveRow = (index) => {
    const newVisits = [...visits];
    newVisits.splice(index, 1);
    setVisits(newVisits);
  };

  const handleReset = () => {
    // Reset all form data
    setFormData({
      mobileNumber: "",
      fullName: "",
      emailId: "",
      purpose: "",
      entryPoint: "",
      host: "",
      branch: "",
      vehicle: "",
      vehicleNumber: "",
    });

    // Reset visits to initial state
    setVisits([
      { date: "", visitDay: "", time: "", meetingRoom: "" },
      { date: "", visitDay: "", time: "", meetingRoom: "" },
    ]);

    // Keep recurrence checked as it was in the original state
    setRecurrence(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare complete data to submit
    const completeData = {
      ...formData,
      recurrence,
      visits: recurrence ? visits : [],
    };

    // Log the data for now (would be replaced with API call)
    console.log("Form submitted with data:", completeData);
    // Set the submitted data and open the modal
    setSubmittedData(completeData);
    setIsModalOpen(true);
    // Submit form logic here - would typically be an API call
  };
  const closeModal = () => {
    setIsModalOpen(false);
    handleReset();
  };
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.actions}>
          <div className={styles.language}>
            <button className={styles.languageButton}>EN ▼</button>
          </div>
          <div className={styles.icon}>
            <span role="img" aria-label="notifications">
              🔔
            </span>
          </div>
          <div className={styles.avatar}>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              alt="User Avatar"
            />
          </div>
        </div>
      </div>
      <div className={styles.tabsContainer}>
        <button
          className={`${styles.tabButton} ${
            inviteTab === "single" ? styles.activeTab : ""
          }`}
          onClick={() => setInviteTab("single")}
        >
          Single Invite
        </button>
        <button
          className={`${styles.tabButton} ${
            inviteTab === "bulk" ? styles.activeTab : ""
          }`}
          onClick={() => setInviteTab("bulk")}
        >
          Bulk Invite
        </button>
        <button
          className={`${styles.tabButton} ${
            inviteTab === "meeting" ? styles.activeTab : ""
          }`}
          onClick={() => setInviteTab("meeting")}
        >
          Meeting Invite
        </button>
      </div>

      <div className={styles.formContainer}>
        <h3 className={styles.formHeader}>Please fill in these details.</h3>

        <form onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                type="text"
                id="mobileNumber"
                className={styles.formInput}
                value={formData.mobileNumber}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                className={styles.formInput}
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="emailId">Email ID</label>
              <input
                type="email"
                id="emailId"
                className={styles.formInput}
                value={formData.emailId}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="purpose">Purpose</label>
              <select
                id="purpose"
                className={styles.formSelect}
                value={formData.purpose}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="meeting">Meeting</option>
                <option value="interview">Interview</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="entryPoint">Entry Point</label>
              <select
                id="entryPoint"
                className={styles.formSelect}
                value={formData.entryPoint}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="main">Main Entrance</option>
                <option value="side">Side Entrance</option>
                <option value="back">Back Entrance</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="host">Host</label>
              <select
                id="host"
                className={styles.formSelect}
                value={formData.host}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="john">John Doe</option>
                <option value="jane">Jane Smith</option>
                <option value="alex">Alex Johnson</option>
              </select>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="branch">Branch</label>
              <select
                id="branch"
                className={styles.formSelect}
                value={formData.branch}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="main">Main Branch</option>
                <option value="north">North Branch</option>
                <option value="south">South Branch</option>
              </select>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="vehicle">Vehicle</label>
              <select
                id="vehicle"
                className={styles.formSelect}
                value={formData.vehicle}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="none">None</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="vehicleNumber">Vehicle Number</label>
              <input
                type="text"
                id="vehicleNumber"
                className={styles.formInput}
                value={formData.vehicleNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className={styles.visitSchedule}>
            <div className={styles.recurringHeader}>
              <label>Recurrence</label>
              <div
                className={`${styles.checkbox} ${
                  recurrence ? styles.checked : ""
                }`}
                onClick={() => setRecurrence(!recurrence)}
              >
                {recurrence && <span>✓</span>}
              </div>
            </div>

            {recurrence &&
              visits.map((visit, index) => (
                <div className={styles.visitRow} key={index}>
                  <div className={styles.formGroup}>
                    <label>Date</label>
                    <input
                      type="date"
                      className={styles.formInput}
                      value={visit.date}
                      onChange={(e) =>
                        handleVisitChange(index, "date", e.target.value)
                      }
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Visit Day</label>
                    <input
                      type="text"
                      className={styles.formInput}
                      value={visit.visitDay}
                      onChange={(e) =>
                        handleVisitChange(index, "visitDay", e.target.value)
                      }
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Time</label>
                    <input
                      type="time"
                      className={styles.formInput}
                      value={visit.time}
                      onChange={(e) =>
                        handleVisitChange(index, "time", e.target.value)
                      }
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Meeting Room</label>
                    <input
                      type="text"
                      className={styles.formInput}
                      value={visit.meetingRoom}
                      onChange={(e) =>
                        handleVisitChange(index, "meetingRoom", e.target.value)
                      }
                    />
                  </div>
                  {index === 0 && (
                    <button
                      type="button"
                      className={styles.removeButton}
                      style={{ visibility: "hidden" }}
                    ></button>
                  )}
                  {index > 0 && (
                    <button
                      type="button"
                      className={styles.removeButton}
                      onClick={() => handleRemoveRow(index)}
                    >
                      <span className={styles.trashIcon}>
                        <MdOutlineDelete />
                      </span>
                    </button>
                  )}
                </div>
              ))}
            {recurrence && (
              <button
                type="button"
                className={styles.addRowButton}
                onClick={handleAddRow}
              >
                <span className={styles.plusIcon}>+</span> Add Row
              </button>
            )}
          </div>

          <div className={styles.formButtons}>
            <button
              type="submit"
              className={styles.inviteButton}
              title="Submit Details"
            >
              Invite
            </button>
            <button
              type="button"
              className={styles.resetButton}
              onClick={handleReset}
              title="Reset Froms"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      {/* Visitor Details Modal */}
      <VisitorDetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        visitorData={submittedData}
      />
    </div>
  );
};

export default InviteVisitor;
