import MaleProfile from '../images/maleProfile.jpg'
import FemaleProfile from '../images/femaleProfile.jpg'

export function Employees(props) {

    const employeesList = props.employees.map(employee =>
        <div onClick={() => props.selectTeamToEmployee(employee.id)} className={(employee.teamName === props.selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: "pointer" }} key={employee.id}>
            <img className='card-img-top' src={employee.gender === "male" ? MaleProfile : FemaleProfile} alt="avatar" />
            <div className='card-body'>
                <h5 className='card-title'>{employee.fullName}</h5>
                <p className='card-text'> <b>Designation:</b> {employee.designation} </p>
            </div>
        </div>)


    return (
        <main className='container'>
            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-6'>
                    <select className='form-select form-select-lg' value={props.selectedTeam} onChange={props.handleTeamSelectionChange}>
                        <option value="TeamA">Team A</option>
                        <option value="TeamB">Team B</option>
                        <option value="TeamC">Team C</option>
                        <option value="TeamD">Team D</option>
                    </select>
                </div>

            </div>
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
