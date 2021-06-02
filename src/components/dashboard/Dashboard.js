import React, { useState, useEffect } from "react";
import { DisplayGrid } from "../display/grid/DisplayGrid";
import { DisplayList } from "../display/list/DisplayList";
import { Toggle } from "../toggle/Toggle";
import "./Dashboard.css";
import { Filter } from '../filter/Filter';

export const Dashboard = ({ displayGrid, setDisplayGrid, employees , filterByName,
  setFilterByName }) => {

    const [filterEmployees, setFilterEmployees] = useState([]);
    const [filterByOffice, setFilterByOffice] = useState("All");

    const SelectOfficeWithEmployeeName = () => {
      if (filterByOffice !== "All") {
        return filterNoise().filter((employee) => employee.office === filterByOffice);
      } else {
        return filterNoise();
      }
    };
  
    const selectOfficeWithoutEmployeeName = () => {
      if (filterByOffice === "All") {
        return filterNoise();
      } else {
        return filterNoise().filter((employee) => employee.office === filterByOffice);
      }
    };
  
    const filterNoise = () => {
      return employees
        .filter((employee) => employee.published !== false)
        .filter((employee) => employee.office !== null)
    };
  
    const filterEmployee = () => {
      if (Array.isArray(employees) && employees.length > 0) {
        if (filterByName !== "") {
          const filteredList = SelectOfficeWithEmployeeName()
          .map((employee) => ({...employee, name: employee.name.toLowerCase()}))
          .filter((employee) =>
            (employee.name.includes(filterByName.toLowerCase()))
          );
          const formattedList = filteredList.map( employee => formatEmployeeName(employee));
          setFilterEmployees(formattedList);
        }
        if (filterByName === "") {
          const locations = selectOfficeWithoutEmployeeName();
          console.log("EMPLOYEE", locations);
          const filteredList = locations.filter((employee) =>
            employee.name.includes(filterByName)
          );
          setFilterEmployees(filteredList);
        }
      }
    };
  
    const formatEmployeeName = (employee) => {
      const uppercaseWords = employee.name.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
  
      return ({...employee, name: uppercaseWords});
    }
  
    useEffect(() => {
      filterEmployee();
      // eslint-disable-next-line
    }, [filterByOffice, filterByName]);

  return (
    <>
      <div className="dashboard-container">
        <Toggle displayGrid={displayGrid} setDisplayGrid={setDisplayGrid} />
        <Filter filterByName={filterByName}
          setFilterByName={setFilterByName}
          setFilterByOffice={setFilterByOffice}
        />
      </div>
      <div>
        {displayGrid ? (
          <DisplayGrid employees={filterEmployees} />
        ) : (
          <DisplayList employees={filterEmployees} />
        )}
      </div>
    </>
  );
};
