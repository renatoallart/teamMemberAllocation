import React from 'react'

export function Header(props) {
  return (
    <header className='container'>
        <div className='row justify-content-center mt-3 mb-4'>
          <div className='col-8'>
            <h1 >Team Member Allocation</h1>
            <h3>{props.selectedTeam} has {props.teamMemberCount} Members</h3>
          </div>
        </div>
    </header>
  )
}
