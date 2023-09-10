import React from 'react'

const Perks = () => {
    const perks=[
        {
            img:'/HomeCustomers/users.svg',
            numbers:'100+',
            type:'Organizers & Speaker'
        },
        {
            img:'/HomeCustomers/flag.svg',
            numbers:'300+',
            type:'Ideal Events'
        },
        {
            img:'/HomeCustomers/grid.svg',
            numbers:'30+',
            type:'New schedules'
        },
        {
            img:'/HomeCustomers/profile.svg',
            numbers:'3000+',
            type:'Satisfied clients'
        },
    ]
  return (
    <div className='mt-24'>
      <p className='text-3xl font-cinzel text-center font-medium text-white'>
      What you will get after being a part of our community
      </p>
      <div className='bg-gradient-to-r from-purple-600 to-pink-600 flex justify-evenly h-48 items-center mt-4 text-black'>
        {
            perks.map(perk=>(
                <div className='font-bold font-cinzel text-center space-y-2'>
                    <img src={perk.img} alt="" className='mx-auto w-9 h-10' />
                    <p className='text-3xl'>{perk.numbers}</p>
                    <p className='text-xl'>{perk.type}</p>
                </div>
            ))
        }
        
      </div>
    </div>
  )
}

export default Perks
