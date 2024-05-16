import React,{useState} from 'react'
import Inputfield from './Inputfield.js'
import NumberInput from './NumberInput.js';
import { createNewWorkoutTemplate, getAllWorkoutTemplates } from '../Services/WorkoutTemplates.js';

const AddWorkoutModal = ({visible,handlevisible,setTemplates}) => {

const [tempateName,setTemplateName]=useState("")
const [muscle,setMuscle]=useState("")
const [exercise,setExercise]=useState([{'name':'','sets':''}])


const handleAdd=(e)=>{
  e.preventDefault()
  const abc=[...exercise,[]]
  setExercise(abc)
}

const handleExerciseName=(e,i)=>{

  const updatedExercise =exercise;
  updatedExercise[i] = {
    ...updatedExercise[i],  
    'name': e.target.value     
  };
  
}
const handleSets=(e,i)=>{
  const updatedExercise = exercise;
  updatedExercise[i] = {
    ...updatedExercise[i],  
    'sets': e.target.value     
  };
  
}

const handleTemplateNameChange=(e)=>{
    setTemplateName(e.target.value)
}

const handleMuscleChange=(e)=>{
  setMuscle(e.target.value)
}

const createworkout=async()=>{
  const obj={
    templateName:tempateName,
    muscle:muscle,
    workouts:exercise,
    email:localStorage.getItem('email')
  }
  console.log(JSON.stringify(obj))
const resp=await createNewWorkoutTemplate(JSON.stringify(obj))
if(resp.error){
  console.log("Error")
}
else{
  handlevisible(visible)
}
console.log(resp)
const alltemps=await getAllWorkoutTemplates();
setTemplates(alltemps)

}

  if (!visible) return null;
    return (
     <div className=' fixed inset-2 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
      <div className='bg-gray-900 w-[400px] h-[600px] border-white  p-2 rounded-xl items-center justify-center ' >
      <button className=' absolute text-black text-center w-8 h-8 rounded-3xl bg-violet-400 ' onClick={()=>handlevisible(visible)}>X</button>
      <h3 className="text-2xl font-bold mb-4 mt-4 bg-inherit text-violet-400 text-center">Add New Workout </h3>
          <form  className="space-y-5 mt-10 bg-gray-900">
         
          <div className='bg-gray-900 flex items-center justify-center'>
        <Inputfield type="text" name="workoutname" label="Template Name" change={handleTemplateNameChange}/>
        </div>
        <div className='bg-gray-900 flex items-center justify-center'>
          <Inputfield type="text" name="targetmuscle" label="Target Muscle" change={handleMuscleChange}/></div>
        
              
      {exercise.map((data,i)=>{
        return(
        <div className='space-y-3 flex items-center justify-center'>
        <div className='bg-gray-900 flex items-center justify-center w-[90%]'>
        <div className="relative z-0 w-[90%] items-center bg-gray-900 group ">
      <input
        id='ExerciseName'
        className="block py-2.5 px-2 w-full text-sm text-white bg-gray-900  border rounded-lg border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-violet-400 peer pl-2 focus:border-2"
        type={'text'}
        onChange={(e)=>{handleExerciseName(e,i)}}
      />
      <label
        htmlFor="ExerciseName"
        className="peer-focus:font-medium absolute text-sm bg-gray-900 text-white font-semibold  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-2 peer-focus:text-violet-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ml-2 pl-1 pr-3 "
        onClick={() => document.getElementById('ExerciseName')?.focus()}>
        Exercise
      </label>

</div>
<div className="relative z-0 w-[20%] items-center bg-gray-900 group ml-2">
      <input
        id='sets'
        className="block py-2.5 px-2 w-full text-sm text-white bg-gray-900  border rounded-lg border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-violet-400 peer pl-2 focus:border-2"
        type='text'
        min={1}
        onChange={(e)=>handleSets(e,i)}
      />
      <label
        className="peer-focus:font-medium absolute text-sm bg-gray-900 text-white font-semibold  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-2 peer-focus:text-violet-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ml-2 pl-1 pr-3 "
        onClick={() => document.getElementById('issuerEmail')?.focus()}>
        Sets
      </label>
    </div>
        </div>
        </div>)
      })}
        
        
        <div className='flex items-center justify-center bg-gray-900'>
          <button className='w-[35%] font-bold bg-violet-600 text-center h-10 rounded-lg'onClick={handleAdd}>ADD MORE</button>
        </div>

              <div className='flex items-center justify-center bg-gray-900'>
              <button className='w-[90%] font-bold bg-violet-600 text-center h-10 rounded-lg' onClick={(e)=>{
                e.preventDefault()
                createworkout()
              }}>ADD WORKOUT</button>
              </div>
            
                </form>


</div>
      </div> 

    );
  };



  export default AddWorkoutModal;