import http from '../EmployeesAPI';

const getAllEmployees = () => {
    return http.get('/employees', {
        headers: {
            Authorization: process.env.REACT_APP_API_KEY
          }}
    );
}


// eslint-disable-next-line
export default {
    getAllEmployees
}