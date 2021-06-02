import React, { useState, useEffect } from "react";
import EmployeesServiceAPI from "../utils/api/service/EmployeesServiceAPI";
import { Dashboard } from '../components/dashboard/Dashboard';
import { LoadingAnimation } from '../components/loading/LoadingAnimation';


export const HomeView = () => {
  const [employees, setEmployees] = useState([]);
  const [displayGrid, setDisplayGrid] = useState(true);
  const [filterByName, setFilterByName] = useState('');
  const body =  document.querySelector('body');

  const getAllEmployees = async () => {
    await EmployeesServiceAPI.getAllEmployees()
      .then((response) => {
        console.log("HOMEVIEW: ", response);
        setEmployees(response);
      })
      .catch((error) => console.log(error));
  };

  const setBackground = () => {
    if(employees.data){
     body.style.background = '#fff';
    } else{
     body.style.background = 'linear-gradient(90deg, #002B55	 0%,#013a72	100%)';
    }
  }

  useEffect(() => {
   //getAllEmployees();
   setBackground();
   // eslint-disable-next-line 
  }, []);

  return (
    <div className="homeview-container">
    {employees.data ? (
        <div onChange={setBackground()}>
    <Dashboard
      displayGrid={displayGrid}
      setDisplayGrid={setDisplayGrid}
      employees={employees.data}
      filterByName={filterByName} setFilterByName={setFilterByName}
    /> </div>
    ) : (
      <h1 className="loading-text"><LoadingAnimation text={"1337..."} role={"heading"}/></h1>
    )}
    </div>
  );
}