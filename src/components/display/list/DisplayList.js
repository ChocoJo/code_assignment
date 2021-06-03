import React from "react";
import { Card } from "../../card/Card";

export const DisplayList = ({ employees }) => {
  return (
    <div className="col">
    {employees.map((employee, index) => (
        <Card
        employee={employee}
        index={index}
        />
    ))}
</div>
  );
};
