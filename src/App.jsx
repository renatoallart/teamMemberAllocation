import { useEffect } from 'react'
import { useState } from 'react'
import { Employees } from './components/Employees'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import EmployeesList from './data/employeesList'

export function App() {

  const [employees, setEmployees] = useState( () => JSON.parse(localStorage.getItem('employeesList')) || EmployeesList)
  const [selectedTeam, setSelectedTeam] = useState(() => JSON.parse(localStorage.getItem('selectedTeam')) || "TeamA")

  useEffect( () => {
    localStorage.setItem('employeesList',JSON.stringify(employees))
  },[employees])

  useEffect( () => {
    localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam))
  },[selectedTeam])


  function handleTeamSelectionChange(event) {
    const { value } = event.target
    console.log(value)
    setSelectedTeam(value)
  }

  function selectTeamToEmployee(employeeId) {
    const transformedEmployees = employees.map(employee => {
      if (employee.id === employeeId) {
        if (employee.teamName === selectedTeam) return { ...employee, teamName: '' }
        return { ...employee, teamName: selectedTeam }
      }
      return employee

    })
    setEmployees(transformedEmployees)
  }


  return (
    <>
      <Header selectedTeam={selectedTeam} 
        teamMemberCount={employees.filter(
          employee => employee.teamName === selectedTeam).length}/>
      <Employees employees={employees}
        selectedTeam={selectedTeam}
        selectTeamToEmployee={selectTeamToEmployee}
        handleTeamSelectionChange={handleTeamSelectionChange} />
      <Footer />
    </>
  )
}
