import React,{useEffect, useState} from 'react'

import Workoutcard from '../Components/Workoutcard'
import AddworkoutModal from '../Components/AddworkoutModal'
import EditWorkoutModal from '../Components/EditWorkoutModal';

import { getAllWorkoutTemplates } from '../Services/WorkoutTemplates';


const Workouts = () => {
 
  const [visible, setVisible] = useState(false);
  const handlevisible = () => setVisible((cur) => !cur);

  const [editVisible, setEditVisible] = useState(false);
  const handleEditvisible = () => setEditVisible((cur) => !cur);

  const[templates,setTemplates]=useState([])

  const[templateID,setTemplateID]=useState()


const getTemplates=async()=>{
const resp=await getAllWorkoutTemplates();
console.log(resp)
setTemplates(resp)
}

const settemplateid=(id)=>{
  console.log(id)
  setTemplateID(id)
}

useEffect(()=>{
getTemplates()

},[ ])
  return (

<div className='ml-5 mr-5 '> 
     <div className='text-violet-400 text-3xl font-bold w-fit p-6 flex items-center justify-center' id='title'>
        My Workout Templates
        <button htmlFor='addWorkout' className='ml-3 rounded-3xl h-8 w-8 text-lg bg-violet-400 text-white items-center justify-center' onClick={()=>handlevisible(visible)} >+</button>
      </div>
      {templates.length > 0 ? (
  <div className='h-full w-full items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
    {templates.map((template, index) => (
      <div key={index} className='flex w-full items-center justify-center'>
        {<Workoutcard template={template} visible={editVisible} handlevisible={handleEditvisible} setTemplateID={settemplateid} templateID={index} setTemplates={setTemplates}/>}
      </div>
    ))}
  </div>
) : (
<div className='w-full h-full flex items-center justify-center'>
  <div className='text-center justify-center items-center  pt-24'>
    <h1 className='font-bold text-4xl'>No templates available</h1>
    <h3 className='font-bold text-2xl'>Create a new template</h3>
    <button htmlFor='addWorkout' className=' rounded-3xl h-12 w-12 text-2xl bg-white text-black items-center justify-center' onClick={()=>handlevisible(visible)} >+</button>
  </div>
</div>

)}
    <AddworkoutModal visible={visible} handlevisible={handlevisible} setTemplates={setTemplates}/>
    <EditWorkoutModal visible={editVisible} handlevisible={handleEditvisible} template={templates[templateID]} setTemplates={setTemplates}/>
   </div>
   


  
  )
}

export default Workouts