import React from "react";
import { BrowserView, isMobileOnly, MobileView } from "react-device-detect";
import "./Filter.css";

export const Filter = ({filterByName, setFilterByName, setFilterByOffice}) => {
  return (
    <>
    { isMobileOnly ? (
    <MobileView>
        <div className="input-group mb-3">
          <input
            placeholder="Search Employee"
            id="mobile-view-filter"
            name="filter"
            type="text"
            aria-describedby="Search bar"
            value={filterByName}
            autoComplete="off"
            onChange={(event) => setFilterByName(event.target.value)}
          />
          <select tabIndex="3" onChange={(event) => setFilterByOffice(event.target.value)}>
            <option value="All">All</option>
            <option value="Borlänge">Borlänge</option>
            <option value="Helsingborg">Helsingborg</option>
            <option value="Ljubljana">Ljubljana</option>
            <option value="Lund">Lund</option>
            <option value="Stockholm">Stockholm</option>
          </select>
        </div>
      </MobileView>
      ) :
       (<BrowserView>
        <div className="input-group mb-3">
          <input
            tabIndex="3"
            placeholder="Search Employee"
            id="browser-view-filter"
            name="filter"
            type="text"
            aria-describedby="Search bar"
            autoComplete="off"
            value={filterByName}
            onChange={(event) => setFilterByName(event.target.value)}
          />
          <select className="office-select" tabIndex="3" onChange={(event) => setFilterByOffice(event.target.value)}>
            <option value="All">All</option>
            <option value="Borlänge">Borlänge</option>
            <option value="Helsingborg">Helsingborg</option>
            <option value="Ljubljana">Ljubljana</option>
            <option value="Lund">Lund</option>
            <option value="Stockholm">Stockholm</option>
          </select>
        </div>
      </BrowserView>) }
    </>
  );
};
