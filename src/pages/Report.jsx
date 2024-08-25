import React from 'react'
import Navbar from '../components/Navbar'
import BarChart from '../components/BarChart'
import PieChart from '../components/PieChart'


const Report = () => {
  return (
      <>
      <Navbar />
      <main className='main-report'>
        <PieChart/>
        <BarChart/>
      </main>
      

      </>
  )
}

export default Report
