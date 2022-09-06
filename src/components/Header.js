import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Button } from 'react-bootstrap'


const Header = () => {
  return (
    <div className='header'>
      <span>Clients 	&gt; Merge 	&gt; Clients Sky Blue</span>
      <span className='buttons'>
        <button className='cancel-button'>Cancel</button>
        <button className='next-button'>Next Step</button>
      </span>
    </div>
  )
}

export default Header
