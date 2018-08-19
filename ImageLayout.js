import React from 'react'

export default ({ children }) =>
  <div
    style={{
      width: '100vw',
      height: '100vw',
      backgroundColor: 'white'
    }}>
    <div
      style={{
        width: '60vw',
        margin: '0 auto',
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)'
      }}>
      {children}
    </div>
  </div>
