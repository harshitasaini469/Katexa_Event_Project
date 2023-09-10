import React from 'react'

const Sidebar = () => {
  const sideImg=[
    {
      img:'/ManageEvents/Man.png',
    },
    {
      img:'/ManageEvents/grid.png',
    },
    {
      img:'/ManageEvents/speedometer.png',
    },
    {
      img:'/ManageEvents/calendar.png',
    },
    {
      img:'/ManageEvents/ticket.png',
    },
    {
      img:'/ManageEvents/emptywallet.png',
    },
    {
      img:'/ManageEvents/book.png',
    },
    {
      img:'/ManageEvents/book.png',
    },
    {
      img:'/ManageEvents/book.png',
    },
    {
      img:'/ManageEvents/messagesquare.png',
    },
    {
      img:'/ManageEvents/gallery.png',
    },
  ]
  return (
    <div className='bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex flex-col gap-3 items-center px-3 py-3 w-24'>
      <img src="/logo.png" alt="" className=''/>
      <div className='flex flex-col gap-4'>
        {
          sideImg.map(btn=>
            <button><img src={btn.img} alt="" className='w-9 mb-2'/></button>
          )
        }
      </div>
    </div>
  )
}

export default Sidebar
