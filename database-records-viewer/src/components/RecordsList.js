import React, { useState, useEffect } from "react";
import "./RecordsList.css";
import RecordItem from "./RecordItem";
import { fetchAllRecords } from "../services/api";

function RecordsList() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecords = async () => {
      try {
        setLoading(true);
        const data = await fetchAllRecords();
        setRecords(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch records. Please try again later.");
        console.error("Error fetching records:", err);
      } finally {
        setLoading(false);
      }
    };

    getRecords();
  }, []);

  if (loading) {
    return <div className="loading-indicator">Loading records...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (records.length === 0) {
    return <div className="empty-state">No records found in the database.</div>;
  }

  return (
    <div className="records-container">
      <div className="records-header">
        {/* Assuming records have id, name, and description fields */}
        <div className="header-id">ID</div>
        <div className="header-name">Name</div>
        <div className="header-description">Description</div>
      </div>
      <div className="records-list">
        {records.map((record) => (
          <RecordItem key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
}

export default RecordsList;
