import React from 'react'

const Hero = () => {
  return (
    <div class="card bg-dark text-white font-cinzel">
  <img class="card-img" src="/ManageEvents/manageEvent.png" alt="Card image"/>
  <div class="card-img-overlay flex flex-col justify-center items-center">
    <h5 class="card-title text-3xl font-semibold tracking-widest">Manage Events</h5>
    <button className='text-xl bg-gradient-to-r from-purple-500 to-pink-600 px-3 py-2 rounded-full font-medium tracking-wide'>Create Event</button>
  </div>
</div>
  )
}

export default Hero;
