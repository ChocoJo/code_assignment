import React from "react";
import { BrowserView } from "react-device-detect";
import "./Toggle.css";

export const Toggle = ({ displayGrid, setDisplayGrid }) => {

  const toggleOff = (isEnabled) => {
    if (isEnabled !== displayGrid) {
      console.log('toggleOn: isEnabled =', isEnabled, ' displayGrid=',displayGrid);
      setDisplayGrid(isEnabled);
      setGridToSelected()
    }
  };

  const toggleOn = (isEnabled) => {
    if (isEnabled !== displayGrid) {
      console.log('toggleOff: isEnabled =', isEnabled, ' displayGrid=',displayGrid);      
      setDisplayGrid(isEnabled);
      setListToSelected();
    }
  };

  const setGridToSelected = () => {
    setButtonStatusToSelected();
    setStyleForSelectedButton();
  };

  const setListToSelected = () => { 
    setButtonStatusToSelected();
    setStyleForSelectedButton();
  };

  const setButtonStatusToSelected = () => {
  const gridButton = document.querySelector("#display-grid");
  const listButton = document.querySelector("#display-list");

    gridButton.setAttribute('aria-pressed', !displayGrid);
    listButton.setAttribute('aria-pressed', displayGrid);
  }

  const setStyleForSelectedButton = () => {
    const gridButton = document.querySelector("#display-grid");
    const listButton = document.querySelector("#display-list");

    gridButton.setAttribute('data-selected', !displayGrid);
    listButton.setAttribute('data-selected', displayGrid);
  }

  return (
    <BrowserView>
      <div className="toggle-btns center">
        <div className="button-container" tabIndex="2">
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
        <div className="button-container" tabIndex="2">
        <button
        data-selected="true"
          className="btn grid"
          id="display-grid"
          aria-label="Display grid view"
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
