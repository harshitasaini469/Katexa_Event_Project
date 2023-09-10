import React from 'react'

const ReviewCard = () => {
  return (
    <div class="card flex flex-row gap-3 border-2 h-[70vh] bg-transparent text-white  border-purple-700 px-4 py-3 font-cinzel w-11/12 mx-auto" >
  <img class="card-img-top w-1/3 " src='Blogs/review/reviewcardimg.png' alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title text-3xl font-semibold">samy ray</h5>
    <p className='text-xl font-medium'>piano artist</p>
    <p class="card-text text-lg text-center mt-4">I am truly grateful for the piano events that have shaped my journey as a piano artist. Attending these events has been a transformative experience, igniting my passion for music and propelling me towards the path of artistic expression." "Through the guidance and mentorship I received at these events, I have been able to cultivate my skills, refine my technique, and nurture my musicality. The opportunity to learn from renowned musicians and connect with fellow artists has been invaluable in my growth as a performer."</p>
  </div>
</div>
  )
}

export default ReviewCard;
