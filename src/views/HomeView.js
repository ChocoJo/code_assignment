import React, { useState, useEffect } from "react";
import EmployeesServiceAPI from "../utils/api/service/EmployeesServiceAPI";
import { Dashboard } from '../components/dashboard/Dashboard';

export const HomeView = () => {
  const [employees, setEmployees] = useState([]);
  const [displayGrid, setDisplayGrid] = useState(true);
  const [filterByName, setFilterByName] = useState('');

  const getAllEmployees = async () => {
    await EmployeesServiceAPI.getAllEmployees()
      .then((response) => {
        console.log("HOMEVIEW: ", response);
        setEmployees(response);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
   getAllEmployees();
  }, []);

  return (
    <>
    {employees.data ? 
    (<Dashboard
      displayGrid={displayGrid}
      setDisplayGrid={setDisplayGrid}
      employees={employees.data}
      filterByName={filterByName} setFilterByName={setFilterByName}
    />) 
    : (
      <h1>Loading...</h1>
    )}
    </>
  );
};
