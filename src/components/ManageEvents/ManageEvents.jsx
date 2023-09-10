import React from 'react'
import ManageEventsTable from './MangeEventsTable'
const ManageEvents = () => {
  return (
    <div className='bg-black font-cinzel flex flex-col w-full px-5 gap-3'>
        <div className='flex items-center gap-3'>
            <p className='text-2xl text-white font-semibold '>My events</p>
            <img src='/ManageEvents/event.png' className='w-32 '/>
        </div>
            <ManageEventsTable/>

    </div>
  )
}

export default ManageEvents;
