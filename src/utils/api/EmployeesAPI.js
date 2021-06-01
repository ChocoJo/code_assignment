import Axios from 'axios';

const URL = 'https://api.1337co.de/v3/'; 

const EmployeesAPI = Axios.create({
    baseURL : URL
}); 

export default EmployeesAPI;