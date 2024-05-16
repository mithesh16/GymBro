import React,{useState,useEffect} from 'react'
import Inputfield from './Inputfield.js'
import NumberInput from './NumberInput.js';
import { createNewWorkoutTemplate, getAllWorkoutTemplates } from '../Services/WorkoutTemplates.js';
import {createNewWorkout} from '../Services/Workouts.js';
const AddActivityModal = ({visible,handlevisible,template,setChoice,getWorkouts}) => {


const [tempateName,setTemplateName]=useState(template?.templateName)
const [muscle,setMuscle]=useState(template?.muscle)
const [allExercise,setAllExercise]=useState(Array.from({ length: template?.workouts.length }, () => ({ name: '', reps: [], weights: [] })))

useEffect(() => {
    if (template && template.workouts) {
        setAllExercise(template.workouts.map(workout => ({ name: workout.name, reps: [], weights: [] })));
    }
}, [template]);

const [week,setWeek]=useState('')

const handleWeek=(week)=>{
    setWeek(week);
}

const createworkout=async()=>{
  const obj={
    title:tempateName,
    week:week,
    muscle:muscle,
    exercises:allExercise,
  email:localStorage.getItem('email')
  }
console.log(allExercise)
 console.log(obj)
//   console.log(JSON.stringify(obj))
const resp=await createNewWorkout(JSON.stringify(obj))
if(resp.error){
  console.log("Error")

}
else{
    console.log(resp)
  handlevisible(visible)
  const allworkouts=await getWorkouts();
  setChoice(0)
}

}


const handleReps=(rep,i,j)=>{
let tempArray=allExercise
tempArray[i].reps[j]=rep;
setAllExercise(tempArray)

}

const handleWeights=(weight,i,j)=>{
    let tempArray=allExercise
    tempArray[i].weights[j]=weight;
    setAllExercise(tempArray)
}



  if (!visible) return null;
    return (
     <div className=' fixed inset-2 overflow-y-scroll bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
      <div className='bg-gray-900 w-[500px] h-[700px] border-white  p-2 rounded-xl items-center justify-center ' >
      <button className=' absolute text-black text-center w-8 h-8 rounded-3xl bg-violet-400 ' onClick={()=>setChoice(0)}>-</button>
      <h3 className="text-2xl font-bold mb-4 mt-4 bg-inherit text-violet-400 text-center">Add Activty </h3>
          <form  className="space-y-5 mt-10 bg-gray-900">
         
          <div className='bg-gray-900 flex items-center justify-center'>
        <Inputfield type="text" name="workoutname" label="Template Name" dis="true" value={template.templateName}/>
        </div>
        <div className='bg-gray-900 flex items-center justify-center'>
          <Inputfield type="text" name="targetmuscle" label="Target Muscle" dis="true" value={template.muscle}/></div>
          <div className='bg-gray-900 flex items-center justify-center'>

          <Inputfield type="text" name="week" label="Week Number"  change={(e)=>handleWeek(e.target.value)}/></div>
        
              
          {template?.workouts.map((workout, i) => {
    return (
        <div className='space-y-3 flex items-center justify-center' key={i}>
            <div className='bg-gray-900 justify-center items-center  '>
                <div className="relative z-0 w-[90%] justify-center items-center bg-gray-900 group ">
                    <input
                        id='ExerciseName'
                        className="block py-2.5 px-2 w-full text-sm text-white bg-gray-900  border rounded-lg border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-violet-400 peer pl-2 focus:border-2"
                        type={'text'}
                        value={workout?.name || ''}
                        disabled
                    />
                    <label
                        htmlFor="ExerciseName"
                        className="peer-focus:font-medium absolute text-sm bg-gray-900 text-white font-semibold  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-2 peer-focus:text-violet-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ml-2 pl-1 pr-3 "
                        onClick={() => document.getElementById('ExerciseName')?.focus()}>
                        Exercise{i + 1}
                    </label>
                </div>
                <br/>
                <div className='flex items-center justify-center'>
                   {Array.from({ length: workout.sets }).map((set, j) => {
                        return (
                            <>
                            <div className="relative z-0 w-[20%] items-center bg-gray-900 group ml-2" key={j}>
                                <input
                                    id='sets'
                                    className="block py-2.5 px-2 w-full text-sm text-white bg-gray-900  border rounded-lg border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-violet-400 peer pl-2 focus:border-2"
                                    type='text'
                                    min={1}
                                    onChange={(e)=>handleWeights(e.target.value,i,j)}
                                />
                                <label
                                    className="peer-focus:font-medium absolute text-sm bg-gray-900 text-white font-semibold  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-2 peer-focus:text-violet-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ml-2 pl-1 pr-3 "
                                    onClick={() => document.getElementById('issuerEmail')?.focus()}>
                                    Weight
                                </label>
                            </div>
                             <div className="relative z-0 w-[20%] items-center bg-gray-900 group ml-2" key={j}>
                             <input
                                 id='sets'
                                 className="block py-2.5 px-2 w-full text-sm text-white bg-gray-900  border rounded-lg border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-violet-400 peer pl-2 focus:border-2"
                                 type='text'
                                 min={1}
                                 onChange={(e)=>handleReps(e.target.value,i,j)}
                             />
                             <label
                                 className="peer-focus:font-medium absolute text-sm bg-gray-900 text-white font-semibold  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-2 peer-focus:text-violet-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ml-2 pl-1 pr-3 "
                                 onClick={() => document.getElementById('issuerEmail')?.focus()}>
                                 Reps
                             </label>
                         </div>
                         </>
                        )
                    })}
                    </div>
            </div>
        </div>)
})}

        {/* <div className='flex items-center justify-center bg-gray-900'>
          <button className='w-[35%] font-bold bg-violet-600 text-center h-10 rounded-lg'onClick={handleAdd}>ADD MORE</button>
        </div> */}

              <div className='flex items-center justify-center bg-gray-900'>
              <button className='w-[90%] font-bold bg-violet-600 text-center h-10 rounded-lg' onClick={(e)=>{
                e.preventDefault()
                createworkout()
              }}>ADD Activty</button>
              </div>
            
                </form>


</div>
      </div> 

    );
  };



  export default AddActivityModal;