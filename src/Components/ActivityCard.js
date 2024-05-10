import React from 'react'

const ActivityCard = ({workout}) => {
      console.log(workout.exercises)
  return (
    <div className=' rounded-3xl ring-1 p-5 ring-gray-700 w-[90%] h-fit drop-shadow-lg drop-shadow-white '>
            <div className='flex items-center justify-between'>
                <div>
                <p className='text-2xl text-violet-400'>{workout.title}</p>
                <p className='text-xl'>Muscle : <span className='text-violet-400'>{workout.muscle}</span></p>
                </div>
           <div>
           <p className='text-2xl text-violet-400 text-end'>{workout.createdAt.slice(0,10)}</p>
            <p className='text-xl'> Week no :<span className='text-violet-400'> {workout.week}</span></p>
           </div>
           </div>
           <br/>

           {workout.exercises.map((exercise, index) => (
  <div class="grid grid-cols-3" key={index}>
    <p class="text-start text-violet-400">{exercise.name}</p>
    <p class="text-center text-violet-400">{exercise.reps.length}</p>
    <p class="text-end text-violet-400">
      ({exercise.reps[index]}x{exercise.weights[index]} Kg) ({exercise.reps[index]}x{exercise.weights[index]} Kg) ({exercise.reps[index]}x{exercise.weights[index]} Kg)
    </p>
  </div>
))}
        

            
            
            
      
    </div>
  )
}

export default ActivityCard
