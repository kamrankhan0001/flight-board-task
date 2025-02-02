import React, { useEffect, useState } from "react";
import { Flight } from "../types";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./FlightDetails.css"; // Import CSS file for styling

const FlightDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [flight, setFlight] = useState<Flight | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        const response = await axios.get(`https://flight-status-mock.core.travelopia.cloud/flights/${id}`);
        setFlight(response.data);
        setError(null);
      } catch (err) {
        setError("Flight details not available.");
      }
    };

    fetchFlightDetails();
  }, [id]);

  if (error) return <p className="error">{error}</p>;
  if (!flight) return <p className="loading">Loading flight details...</p>;

  return (
    <div className="flight-details-container">
      <div className="flight-card">
        <h2 className="flight-title">Flight Details</h2>
        <div className="flight-info">
          <p><strong>Flight Number:</strong> {flight.flightNumber}</p>
          <p><strong>Airline:</strong> {flight.airline}</p>
          <p><strong>Origin:</strong> {flight.origin}</p>
          <p><strong>Destination:</strong> {flight.destination}</p>
          <p><strong>Departure Time:</strong> {flight.departureTime}</p>
          <p className={`status ${flight.status.toLowerCase()}`}><strong>Status:</strong> {flight.status}</p>
        </div>
        <Link to="/" className="back-button">⬅ Back to Flight Board</Link>
      </div>
    </div>
  );
};

export default FlightDetails;
