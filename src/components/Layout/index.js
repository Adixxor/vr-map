import React from 'react'
import Sidebar from '../Sidebar'

export default function Layout({ children }) {
  return (
    <div style={{ position: 'relative ' }}>
      <Sidebar />
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
       {children}
      </div>
    </div>
  )
}
