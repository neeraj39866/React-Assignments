import React from 'react'
import {noRecord} from './Procedure'

const Membership = () => {
  return (
    <>
      <div className="wrapper">
        <div className='membership'>
          <div style={{padding:'20px'}}>
          <span className='heading'>Memberships</span>
          <span>Please select the right information you want to keep in the new merged profile.</span>
          </div>
          {noRecord()}
        </div>
        <div className='treatment'>
        <div style={{padding:'20px'}}>
          <span className='heading'>Treatment Plans</span>
          <span>Please select the right information you want to keep in the new merger profile</span>
          </div>
          {noRecord()}
        </div>
      </div>
    </>
  )
}

export default Membership
