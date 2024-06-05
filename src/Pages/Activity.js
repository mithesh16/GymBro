import React,{useState,useEffect} from 'react'
import ActivityCard from '../Components/ActivityCard'
import SelectTemplateModal from '../Components/SelectTemplateModal';
import { getAllWorkoutTemplates } from '../Services/WorkoutTemplates';
import AddActivityModal from '../Components/AddActivityModal';
import { getAllWorkouts } from '../Services/Workouts';
import EditActivityModal from '../Components/EditActivityModal';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Activity = () => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));
  const [visible, setVisible] = useState(false);
  const[editvisible,setEditvisible]=useState(false)
  const handlevisible = () => setVisible((cur) => !cur);
  const handleeditvisible=()=>setEditvisible((cur)=>!cur);

  const[templates,setTemplates]=useState([])
  let [temp,setTemplate]=useState();
const[workouts,setWorkouts]=useState([])
const [workout,setWorkout]=useState();

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
    },[user])

  return (
    <div className='mx-5 '> 

    <div className='text-violet-400 text-3xl font-bold w-fit p-6 flex items-center justify-center' id='title'>
       My Activity
        <button htmlFor='addWorkout' className='ml-3 w-8 rounded-[50%] md:rounded-3xl h-8 md:w-8 text-lg bg-violet-400 text-white items-center justify-center' onClick={()=>handlevisible(visible)} >+</button>
      </div>
      <div className=''>
      {workouts.length > 0 ? (
  <div className=' flex flex-col items-center justify-center gap-5 py-6'>
   {workouts.map((workout, index) => (
  <ActivityCard workout={workout} getWorkouts={getWorkouts} setWorkout={setWorkout}handleeditvisible={handleeditvisible} editvisible={editvisible} toast={toast}/>
))}
  </div>
) : (
<div className='w-full h-full flex items-center justify-center'>
  <div className='text-center justify-center items-center  pt-24'>
    <h1 className='font-bold text-4xl'>No activity created</h1>
    <h3 className='font-bold text-2xl'>Track a new activity</h3>
    <button htmlFor='addWorkout' className=' rounded-3xl h-12 w-12 text-2xl bg-white text-black items-center justify-center' onClick={()=>handlevisible(visible)} >+</button>
  </div>
</div>

)}
      </div>

<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

      {choice==0?(<SelectTemplateModal visible={visible} handlevisible={handlevisible} templates={templates} setTemp={setTemp} setChoice={setChoice}/>):(<AddActivityModal visible={visible} handlevisible={handlevisible} template={temp} setChoice={setChoice} getWorkouts={getWorkouts} toast={toast}/> )
      }
      <EditActivityModal handleeditvisible={handleeditvisible} editvisible={editvisible} workout={workout} getWorkouts={getWorkouts} toast={toast}/>
    </div>

    
  )
}

export default Activity
