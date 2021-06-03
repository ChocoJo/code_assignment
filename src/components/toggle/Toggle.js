import React from "react";
import { BrowserView } from "react-device-detect";
import "./Toggle.css";

export const Toggle = ({ displayGrid, setDisplayGrid }) => {
  const gridButton = document.querySelector("#display-grid");
  const listButton = document.querySelector("#display-list");

  const handleKeyPress = (e, isEnabled) => {
    if (e.key === "Enter") {
      if (isEnabled === true) {
        toggleOn(isEnabled);
      } else {
        toggleOff(isEnabled);
      }
    }
  };

  const toggleOff = (isEnabled) => {
    if (isEnabled !== displayGrid) {
      setDisplayGrid(isEnabled);
      setGridToSelected();
    }
  };

  const toggleOn = (isEnabled) => {
    if (isEnabled !== displayGrid) {
      setDisplayGrid(isEnabled);
      setListToSelected();
    }
  };

  const setGridToSelected = () => {
    setButtonStatusToSelected();
    setStyleForSelectedButton();
    listButton.setAttribute("aria-label", "Display list view selected");
    gridButton.setAttribute("aria-label", "Display grid view");
  };

  const setListToSelected = () => {
    setButtonStatusToSelected();
    setStyleForSelectedButton();
    gridButton.setAttribute("aria-label", "Display grid view selected");
    listButton.setAttribute("aria-label", "Display list view");
  };

  const setButtonStatusToSelected = () => {
    gridButton.setAttribute("aria-pressed", !displayGrid);
    listButton.setAttribute("aria-pressed", displayGrid);
  };

  const setStyleForSelectedButton = () => {
    gridButton.setAttribute("data-selected", !displayGrid);
    listButton.setAttribute("data-selected", displayGrid);
  };

  return (
    <BrowserView>
      <div className="toggle-btns center">
        <div className="button-container" tabIndex="2" onKeyPress={(e) => handleKeyPress(e, false)}>
          <button
            data-selected="false"
            className="btn list"
            id="display-list"
            aria-label="Display list view"
            aria-pressed="false"
            onClick={() => toggleOff(false)}
          >
            <i className="fa fa-list"></i>
          </button>
        </div>
        <div className="button-container" tabIndex="2" onKeyPress={(e) => handleKeyPress(e, true)}>
          <button
            data-selected="true"
            className="btn grid"
            id="display-grid"
            aria-label="Display grid view selected"
            aria-pressed="true"
            onClick={() => toggleOn(true)}
          >
            <i className="fa fa-th-large"></i>
          </button>
        </div>
      </div>
    </BrowserView>
  );
};
