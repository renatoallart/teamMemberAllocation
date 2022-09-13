import { useState } from 'react'
import EmployeesList from '../data/employeesList'
import MaleProfile from '../images/maleProfile.jpg'
import FemaleProfile from '../images/femaleProfile.jpg'

export function Employees() {
    const [employees, setEmployees] = useState(EmployeesList)

    const employeesList = employees.map(employee =>
        <div className='card m-2' style={{cursor:"pointer"}} key={employee.id}>
            <img className='card-img-top' src={employee.gender === "male" ? MaleProfile : FemaleProfile} alt="" />
            <div className='card-body'>
                <h5 className='card-title'>{employee.fullName}</h5>
                <p className='card-text'> <b>Designation:</b> {employee.designation} </p>
            </div>
        </div>)
    return (
        <main className='container'>
            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-8'>
                    <div className='card-collation'>
                        {employeesList}
                    </div>
                </div>
            </div>
        </main>
    )
}
