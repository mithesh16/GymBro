import React from 'react'
import Inputfield from './Inputfield.js'
import NumberInput from './NumberInput.js';
import { createNewWorkoutTemplate, getAllWorkoutTemplates } from '../Services/WorkoutTemplates.js';
import TemplateCard from './TemplateCard.js';
import { useNavigate } from "react-router-dom";

const SelectTemplateModal = ({visible,handlevisible,templates,setTemp,setChoice}) => {
  const navigation=useNavigate();
    if (!visible) return null;
    return (
   <div className=' fixed inset-2 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
      <div className='bg-gray-900 w-[95%] h-[700px] border-white  p-2 rounded-xl items-center justify-center ' >
      <button className=' absolute text-black text-center w-8 h-8 rounded-3xl bg-violet-400 ' onClick={()=>handlevisible(visible)}>X</button>
      <h3 className="text-2xl font-bold mb-4 mt-4 bg-inherit text-violet-400 text-center">Select Template </h3>
      {templates.length > 0 ? (

<div className='overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 bg-gray-900 md:justify-center md:items-center lg:ml-3 lg:items-start'>
{templates?.map((template, index) => (
  <div key={index} className='flex w-full items-center justify-center bg-gray-900'>
    <TemplateCard template={template}  templateID={index} setTemp={setTemp} setChoice={setChoice} /> 
  </div>
))}
</div>

  
) : (
<div className='w-full h-full flex items-center justify-center'>
  <div className='text-center justify-center items-center  pt-24'>
    <h1 className='font-bold text-4xl'>No templates available</h1>
    <h3 className='font-bold text-2xl'>Create a new template</h3>
    <button htmlFor='addWorkout' className=' rounded-3xl h-12 w-12 text-2xl bg-white text-black items-center justify-center' onClick={()=>{
      handlevisible(visible)
      navigation('/workouts')

    }
      } >+</button>
  </div>
</div>
)}

</div>
      </div> 

    );
  };

export default SelectTemplateModal
