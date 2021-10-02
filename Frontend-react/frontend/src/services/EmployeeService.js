import axios from "axios"
// get all employee list url
const BASE_URL = "http://localhost:8080/API/all";

class EmployeeService{

    getAllEmployeeList(){
      return  axios.get(BASE_URL)
    }

}

export default new EmployeeService();