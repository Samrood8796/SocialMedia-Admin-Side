import React from 'react' 
import ApexChart from './Charts/BarChart'
import Boxes from './Boxes'

const Dashbord = () => {
  return (
    <div className='flex flex-col m-10 p-10'>
      <Boxes />
      <ApexChart/>
    </div>
  )
}

export default Dashbord
