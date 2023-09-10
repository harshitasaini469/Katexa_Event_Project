import React from 'react'
import EventCard from './EventCard'

const FeaturedEvents = () => {
  return (
    <div className='mt-24 font-cinzel text-white w-full'>
        <p className='text-4xl font-semibold text-center'>recent featured events</p>
        <div className='mt-5'>
            <EventCard/>
        </div>
      
    </div>
  )
}

export default FeaturedEvents
