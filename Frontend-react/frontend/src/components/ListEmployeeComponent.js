import React,{useEffect, useState} from 'react'
import EmployeeService from '../services/EmployeeService';

const ListEmployeeComponent = () => {
    const [employeeL, setEmployeeL] = useState([]);

    useEffect(() => {
        EmployeeService.getAllEmployeeList()
        .then( (resp)=>{
            setEmployeeL(resp.data);
            console.log(resp);
            console.log(resp.data);

        }).catch((err)=>
        {
            console.log(err)

        })
    }, [])

    return (
        <div className="container">
            <h2 className="text-center">Employee List</h2>
            <table className="table table-bordered table-striped">
            <thead>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
            </thead>
            <tbody>
                {
                    employeeL.map(
                        emp =>
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.emailID}</td>

                        </tr>
                    )
                }
            </tbody>
            </table>
            
        </div>
    )
}

export default ListEmployeeComponent
