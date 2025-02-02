import React from "react";
import FlightTable from "../components/FlightTable";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Flight Status Board</h1>
      <FlightTable />
    </div>
  );
};

export default Home;
