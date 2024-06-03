import React from 'react'
import { MdEdit,MdDelete } from 'react-icons/md'
import { deleteWorkout } from '../Services/Workouts'
const ActivityCard = ({workout,getWorkouts,setWorkout,handleeditvisible,editvisible,toast}) => {

        
  const deleteworkout=async(id)=>{
    console.log(id)
    const resp=await deleteWorkout(id);
    toast.success('Activity deleted successfully!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    const alltemps = await getWorkouts()
    console.log(resp)
  }

  return (
    <div className=' rounded-3xl ring-1 p-5 ring-gray-700 w-[90%] h-full drop-shadow-lg drop-shadow-white '>
            <div className='flex items-center justify-between'>
                <div>
          <div className='flex gap-x-5'>
            <p className='text-2xl text-violet-400'>{workout.title} </p>
            <div className='hidden md:flex justify-center items-center'>
              <button className=' flex items-center justify-center  text-black text-center w-8 h-8  rounded-3xl bg-violet-400 ' onClick={() => {
                  handleeditvisible(editvisible)
                  setWorkout(workout)
              }} >
                <MdEdit className='bg-violet-400' /></button>
              <button className=' flex items-center justify-center  text-black text-center w-8 h-8  rounded-3xl bg-violet-400 ml-3' onClick={() => {
                deleteworkout(workout._id)
              }} >
                < MdDelete className='bg-violet-400' /> </button>
            </div>
          </div>
          <p className='text-md md:text-xl'>Muscle : <span className='text-violet-400 text-xl'>{workout.muscle}</span></p>
        </div>
           <div>
           <p className='text-md md:text-2xl text-violet-400 text-end'>{workout.createdAt.slice(0,10)}</p>
            <p className='text-md md:text-xl'> Week no :<span className='text-violet-400 text-xl'> {workout.week}</span></p>
           </div>
           </div>
           <br/>

           {workout.exercises.map((exercise, exerciseIndex) => (
  <div class="grid grid-cols-3" key={exerciseIndex}>
    <p class="text-start text-violet-400">{exercise.name}</p>
    <p class="text-center text-violet-400">{exercise.reps.length}</p>
    <p class="text-end text-violet-400">
      {exercise.reps.map((rep, repIndex) => (
        <span key={repIndex}>
          ({rep}x{exercise.weights[repIndex]} Kg)
        </span>
      ))}
    </p>
    
  </div>
))}
        

            
            
            
      <div className='flex justify-center items-center md:hidden'>
              <button className=' flex items-center justify-center  text-black text-center w-8 h-8  rounded-3xl bg-violet-400 ' onClick={() => {
                  handleeditvisible(editvisible)
                  setWorkout(workout)
              }} >
                <MdEdit className='bg-violet-400' /></button>
              <button className=' flex items-center justify-center  text-black text-center w-8 h-8  rounded-3xl bg-violet-400 ml-3' onClick={() => {
                deleteworkout(workout._id)
              }} >
                < MdDelete className='bg-violet-400' /> </button>
            </div>
    </div>
  )
}

export default ActivityCard
