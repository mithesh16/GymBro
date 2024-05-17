import React from 'react'
import { MdDelete, MdEdit } from "react-icons/md";
import { deleteWorkoutTemplate, getAllWorkoutTemplates } from '../Services/WorkoutTemplates';

const Workoutcard = ({template,visible,handlevisible,setTemplateID,templateID,setTemplates,toast}) => {
  const workouts=template.workouts

  
  const deleteTemplate=async(id)=>{
    console.log(id)
    const resp=await deleteWorkoutTemplate(id);
    toast.success('Template Deleted successfully!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    const alltemps = await getAllWorkoutTemplates()
    setTemplates(alltemps)
    console.log(resp)
  }

  return (

    <div class=" rounded-3xl mt-4 ring-1 p-5 ring-gray-700 w-64 h-[350px] drop-shadow-lg drop-shadow-white ">
        <div className='flex justify-between w-full'>
        <h3 id="tier-startup" class="text-2xl font-bold leading-8 text-white">{template.templateName}</h3> 
       
        <div className='flex justify-center items-center'>
        <button className=' flex items-center justify-center  text-black text-center w-8 h-8  rounded-3xl bg-violet-400 ' onClick={()=>{
          setTemplateID(templateID);

          handlevisible(visible);
          }} ><MdEdit className='bg-violet-400'/></button>

        <button className=' flex items-center justify-center  text-black text-center w-8 h-8  rounded-3xl bg-violet-400 ml-3' onClick={()=>{
         deleteTemplate(template._id)
        }} >< MdDelete className='bg-violet-400'/> </button>
        </div>

        </div>
        
        <p class="mt-1 text-sm leading-6 text-violet-400">{template.createdAt.slice(0,10)}</p>
        <p class="mt-1 flex items-baseline gap-x-1">
          <span class="text-md font-bold tracking-tight text-white">No of exercises:</span>
         
          <span class="text-md font-bold leading-6 text-violet-400">{template.workouts?.length}</span>
        </p>
        {/* <a href="#" aria-describedby="tier-startup" class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-600 text-white shadow-sm hover:bg-green-800 focus-visible:outline-red-600">Buy plan</a> */}
        <ul role="list" class="leading-6">
        {workouts?.map((workout, index) => (
      <li key={index} className="mt-1 text-justify">
  <div className='flex justify-between'>
  <span className=' text-violet-400 text-lg font-bold '>{workout.name}</span>
  <span className="text-white text-md font-semi-bold">Sets: <span className='text-violet-400 font-bold'>{workout.sets}</span></span>
</div>
    
    
  </li>
))}
   
        </ul>
      </div>
  )
}

export default Workoutcard
