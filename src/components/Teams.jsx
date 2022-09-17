import React from 'react'

export function Teams({ selectedTeam, handleTeamSelectionChange }) {
  return (
    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
        <option value="TeamA">TeamA</option>
        <option value="TeamB">TeamB</option>
        <option value="TeamC">TeamC</option>
        <option value="TeamD">TeamD</option>
      </select>
  )
}

