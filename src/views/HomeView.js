import React, { useState, useEffect } from "react";
import EmployeesServiceAPI from "../utils/api/service/EmployeesServiceAPI";
import { Dashboard } from '../components/dashboard/Dashboard';

export const HomeView = () => {
  const [employees, setEmployees] = useState([]);
  const [displayGrid, setDisplayGrid] = useState(true);

  const getAllEmployees = async () => {
    await EmployeesServiceAPI.getAllEmployees()
      .then((response) => {
        console.log("HOMEVIEW: ", response);
        setEmployees(response);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
   // getAllEmployees();
  }, []);

  return (
    <Dashboard
      displayGrid={displayGrid}
      setDisplayGrid={setDisplayGrid}
    />
  );
};
