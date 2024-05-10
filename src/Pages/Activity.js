import React,{useState,useEffect} from 'react'
import ActivityCard from '../Components/ActivityCard'
import SelectTemplateModal from '../Components/SelectTemplateModal';
import { getAllWorkoutTemplates } from '../Services/WorkoutTemplates';
import AddActivityModal from '../Components/AddActivityModal';
import { getAllWorkouts } from '../Services/Workouts';
const Activity = () => {

  const [visible, setVisible] = useState(false);
  const handlevisible = () => setVisible((cur) => !cur);

  const[templates,setTemplates]=useState([])
  let [temp,setTemplate]=useState();
const[workouts,setWorkouts]=useState([])

const setTemp=(template)=>{
  console.log(template);
  setTemplate(template);
}

const getTemplates=async()=>{
  const resp=await getAllWorkoutTemplates();
  setTemplates(resp)
  }

  const getWorkouts=async()=>{
    const resp=await getAllWorkouts();
    console.log(resp)
    setWorkouts(resp)
  }

  const[choice,setChoice]=useState(0)
  
  useEffect(()=>{
    getTemplates()
    getWorkouts()
    },[ ])

  return (
    <div>
    <div className='text-violet-400 text-3xl font-bold w-fit p-6 flex items-center justify-center' id='title'>
        My Activity
        <button htmlFor='addWorkout' className='ml-3 rounded-3xl h-8 w-8 text-lg bg-violet-400 text-white items-center justify-center' onClick={()=>handlevisible(visible)} >+</button>
      </div>
      <div className=' flex flex-col items-center justify-center gap-5'>
      {workouts.map((workout, index) => (
        <ActivityCard workout={workout}/>
      ))}
      </div>

      {choice==0?(<SelectTemplateModal visible={visible} handlevisible={handlevisible} templates={templates} setTemp={setTemp} setChoice={setChoice}/>):(<AddActivityModal visible={visible} handlevisible={handlevisible} template={temp} setChoice={setChoice} getWorkouts={getWorkouts}/> )
      }
      
    </div>

    
  )
}

export default Activity
