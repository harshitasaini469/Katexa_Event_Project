import React from 'react'
import ManageEarningTable from './ManageEarningsTable'

const ManageEarnings = () => {
  return (
    <div className='font-cinzel w-full px-5 text-white space-y-4'>
        <div className='flex items-center'>
        <p className='text-3xl'> My Earnings</p>
<img src="/MangeEarnings/earnings.png" alt="" className='w-32' />
        </div>
      <hr className='bg-purple-700 ' />

      <div className='flex justify-between items-center mt-5'>
        <div className='bg-purple-600 px-4 py-4 rounded-xl'><p>Total Earnings: Rs.45,000</p></div>
        <div className='bg-purple-600 px-4 py-4 rounded-xl'><p>expenses and losses : Rs.15,000 </p></div>
        <div className='bg-purple-600 px-4 py-4 rounded-xl'><p>Total profit : 30,000</p></div>
        <button className='bg-green-800 h-fit w-fit px-3 py-2 rounded-xl'>Access Account</button>
      </div>
      <div className='mt-5'>
        <ManageEarningTable/>
      </div>
    </div>
  )
}

export default ManageEarnings
