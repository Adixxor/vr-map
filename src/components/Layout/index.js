import React from 'react'
import Sidebar from '../Sidebar'

export default function Layout({ children }) {
  return (
    <div style={{ position: 'relative ' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1000 }}>
        <Sidebar />
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
       {children}
      </div>
    </div>
  )
}
