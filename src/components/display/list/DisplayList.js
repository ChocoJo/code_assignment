import React from "react";
import { Card } from "../../card/Card";
import { BrowserView, MobileView } from 'react-device-detect';

export const DisplayList = ({ employees }) => {
  return (
    <>
      <BrowserView className="desktop">
        <div className="col">
          {employees.map((employee, index) => (
            <Card key={employee.name} employee={employee} index={index} />
          ))}
        </div>
      </BrowserView>
      <MobileView className="mobile">
        <div className="col">
          {employees.map((employee, index) => (
            <Card key={employee.name} employee={employee} index={index} />
          ))}
        </div>
      </MobileView>
    </>
  );
};
