import Buttons from 'components/Buttons'
import Navbar from 'components/Navbar'
import { Table } from 'components/Table'
import React from 'react'
const home = () => {
  return (
    <>
      <Navbar />
      <div className='mainHome'>
        <h1>Cyrpto Tracker Application</h1>
        <Table />
        <Buttons />
      </div>
    </>
  )
}

export default home