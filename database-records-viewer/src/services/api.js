// This file contains all API calls to the backend

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:3001/api";

/**
 * Fetches all records from the database
 * @returns {Promise<Array>} Array of record objects
 */
export async function fetchAllRecords() {
  try {
    const response = await fetch(`${API_BASE_URL}/records`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchAllRecords:", error);
    throw error;
  }
}

/**
 * Fetches a single record by ID
 * @param {string|number} id - The record ID
 * @returns {Promise<Object>} The record object
 */
export async function fetchRecordById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/records/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchRecordById:", error);
    throw error;
  }
}
