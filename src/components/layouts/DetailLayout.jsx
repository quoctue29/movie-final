import React from 'react'
import { Outlet } from 'react-router-dom'

const DetailLayout = () => {
  return (
    <div>
        <main>
    <Outlet/>
  </main>
  </div>
  )
}

export default DetailLayout