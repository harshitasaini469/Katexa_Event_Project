import React from 'react'

const EventCategoryCard = ({img,title,motive,category}) => {
  return (
    <div class="card w-80 h-96 border-0 rounded-lg">
              <img class="card-img-top rounded-lg" src={img} alt="Card image cap" />
              <div class="card-body  flex flex-col justify-between items-center text-center px-0 py-0 ">
                <p class="card-title text-2xl font-semibold mt-3">{title}</p>
                <p class="card-text text-xs font-medium">{motive} </p>
                <div className='bg-pink-300 py-4 text-center  w-full rounded-b-lg'>
                  <p className='text-xl font-semibold'>{category}</p>
                </div>
              </div>
            </div>
  )
}

export default EventCategoryCard
