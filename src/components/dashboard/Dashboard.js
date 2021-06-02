import React from "react";
import { DisplayGrid } from "../display/grid/DisplayGrid";
import { DisplayList } from "../display/list/DisplayList";
import { Toggle } from "../toggle/Toggle";
import "./Dashboard.css";
import { Filter } from '../filter/Filter';

export const Dashboard = ({ displayGrid, setDisplayGrid, employees }) => {
  return (
    <>
      <div className="dashboard-container">
        <Toggle displayGrid={displayGrid} setDisplayGrid={setDisplayGrid} />
        <Filter
        />
      </div>
      <div>
        {displayGrid ? (
          <DisplayGrid employees={employees} />
        ) : (
          <DisplayList employees={employees} />
        )}
      </div>
    </>
  );
};
