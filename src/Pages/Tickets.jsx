import React from 'react'
import Months from '../components/tickets/Months'
import Dates from '../components/tickets/Dates'

const Tickets = () => {
  return (
    <div className='flex  flex-col justify-center items-center bg-black  h-screen font-cinzel '>
<p className='text-4xl text-white font-medium mt-5'>get your tickets now</p>
        <div className='flex items-center gap-3 w-8/12 mt-3 '>
        <Months/>
        <div className='flex flex-col gap-4 w-full'>
        <Dates/>
        <Dates/>
        <Dates/>
        <Dates/>
        <Dates/>
        <Dates/>

        </div>
        </div>
     
    </div>
  )
}

export default Tickets
