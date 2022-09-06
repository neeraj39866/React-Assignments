import React from 'react'
import { noRecord } from './Procedure'

const Wallet = () => {
  return (
    <div>
      <div className="wallet-wrapper">
        <div className='wallet-amount'>
          <span className='heading wallet' style={{ padding: '20px 0px 0px 20px' }}>Wallet</span>
          <div className='cost'>
            <div>
              Dollar Credit
              <span style={{ float: 'right' }}> $0.00</span>
            </div>
            <div>Alle Points<span style={{ float: 'right' }}> $0.00</span></div>
            <div>Aspire Credit<span style={{ float: 'right' }}> $0.00</span></div>
          </div>
        </div>
        <div className='wallet-amount'>
          <span className='heading wallet' style={{ padding: '20px 0px 0px 20px' }}>Product &amp; Packages</span>
          <table>
            <tbody>
              <tr style={{backgroundColor: 'aliceblue'}}>
                <th>Product Name</th>
                <th>Balance Units</th>
                <th>$ Balance</th>
              </tr>
            </tbody>
          </table>
          {noRecord()}
        </div>

      </div>
    </div>
  )
}

export default Wallet
