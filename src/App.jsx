import { useEffect } from 'react'
import { useState } from 'react'
import { Employees } from './components/Employees'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { GroupTeamMembers } from './components/GroupTeamMembers'
import EmployeesList from './data/employeesList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { NotFound } from './components/NotFound'


export function App() {

  const [employees, setEmployees] = useState(() => JSON.parse(localStorage.getItem('employeesList')) || EmployeesList)
  const [selectedTeam, setSelectedTeam] = useState(() => JSON.parse(localStorage.getItem('selectedTeam')) || "TeamA")

  useEffect(() => {
    localStorage.setItem('employeesList', JSON.stringify(employees))
  }, [employees])

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam])

  function handleTeamSelectionChange(event) {
    const { value } = event.target
    setSelectedTeam(value)
  }

  function selectTeamToEmployee(employeeId) {
    setEmployees(oldStatesEmployees => oldStatesEmployees.map(employee => {
      if (employee.id === employeeId) {
        if (employee.teamName === selectedTeam) return { ...employee, teamName: '' }
        return { ...employee, teamName: selectedTeam }
      }
      return employee
    }))
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Header selectedTeam={selectedTeam}
          teamMemberCount={employees.filter(
            employee => employee.teamName === selectedTeam).length} />
        <Routes>
          <Route path='/' element={<Employees employees={employees}
            selectedTeam={selectedTeam}
            selectTeamToEmployee={selectTeamToEmployee}
            handleTeamSelectionChange={handleTeamSelectionChange} />} />
          <Route path='/GroupTeamMembers' element={
            <GroupTeamMembers employees={employees}
              selectedTeam={selectedTeam}
              setSelectedTeam={selectedTeam} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}
