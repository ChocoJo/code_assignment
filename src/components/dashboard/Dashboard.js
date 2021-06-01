import React from "react";
import { DisplayGrid } from "../display/grid/DisplayGrid";
import { DisplayList } from "../display/list/DisplayList";
import { Toggle } from "../toggle/Toggle";
import './Dashboard.css';

export const Dashboard = ({ displayGrid, setDisplayGrid }) => {
  return (
    <>
    <div className="dashboard-container">
      <Toggle displayGrid={displayGrid} setDisplayGrid={setDisplayGrid} />
    </div>
          <div>
          {displayGrid ? (
            <DisplayGrid/>
          ) : (
            <DisplayList />
          )}
        </div>
        </>
  );
};
