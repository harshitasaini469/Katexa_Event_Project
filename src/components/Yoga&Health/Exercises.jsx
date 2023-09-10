import React from 'react'
import ExcerciseCard from './ExcerciseCard'

const Exercises = () => {
  return (
    <div className='flex flex-wrap gap-4 bg-black '>
      <ExcerciseCard daysLeft={'2 days left'} img={'/yoga&health/mentalhealth.png'} exercise={'mental health'} instructor={'instructor sam'} date={'20 Sept 2023'} location={'star stadium,kolkata'} />
      <ExcerciseCard daysLeft={'2 days left'} img={'/yoga&health/kidsyoga.png'} exercise={'yoga for kids'} instructor={'instructor joe'} date={'20 Sept 2023'} location={'star stadium,kolkata'} />
      <ExcerciseCard daysLeft={'2 days left'} img={'/yoga&health/tonedmuscle.png'} exercise={'Toned muscles'} instructor={'instructor ally'} date={'20 Sept 2023'} location={'star stadium,kolkata'} />
      <ExcerciseCard daysLeft={'2 days left'} img={'/yoga&health/morningstretch.png'} exercise={'morning stretching'} instructor={'Ft. Arijith'} date={'20 Sept 2023'} location={'star stadium,kolkata'} />


    </div>
  )
}

export default Exercises
