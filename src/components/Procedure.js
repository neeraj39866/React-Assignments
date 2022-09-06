import React from 'react'

export function noRecord(){
  return <div className='no-record'>Sorry, No record found</div>
}

const Procedure = () => {
  return (
    <div className='main-procedure'>
      <div className='procedure'>Procedures</div>
      {noRecord()}
      {/* <div className='no-record'>Sorry, No record found</div> */}
    </div>
  )
}

export default Procedure;
