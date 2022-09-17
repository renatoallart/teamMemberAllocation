import TeamMemberCard from './TeamMemberCard';

export function TeamMembers({ employees, handleEmployeeCardClick, selectedTeam }){
  return (
    employees.map((employee) => (
      <TeamMemberCard employee={employee} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} />
    ))
  )
}
