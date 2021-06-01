import React from "react";
import { BrowserView } from "react-device-detect";
import "./Toggle.css";

export const Toggle = ({ displayGrid, setDisplayGrid }) => {
  const gridButton = document.querySelector("#display-grid");
  const listButton = document.querySelector("#display-list");

  const toggleOff = (isEnabled) => {
    if (isEnabled !== displayGrid) {
      setDisplayGrid(isEnabled);
      setGridToSelected()
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
  };

  const setListToSelected = () => { 
    setButtonStatusToSelected();
    setStyleForSelectedButton();
  };

  const setButtonStatusToSelected = () => {
    gridButton.setAttribute('aria-pressed', !displayGrid);
    listButton.setAttribute('aria-pressed', displayGrid);
  }

  const setStyleForSelectedButton = () => {
    gridButton.setAttribute('data-selected', !displayGrid);
    listButton.setAttribute('data-selected', displayGrid);
  }

  return (
    <BrowserView>
      <div className="toggle-btns center">
        <button
        data-selected="false"
          className="btn list"
          id="display-list"
          aria-label="Display list view"
          aria-pressed="false"
          tabIndex="2"
          onClick={() => toggleOff(false)}
        >
          <i className="fa fa-list"></i>
        </button>
        <button
        data-selected="true"
          className="btn grid"
          id="display-grid"
          aria-label="Display grid view"
          aria-pressed="true"
          tabIndex="2"
          onClick={() => toggleOn(true)}
        >
          <i className="fa fa-th-large"></i>
        </button>
      </div>
    </BrowserView>
  );
};
