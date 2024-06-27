import { colors } from '@mui/material';
import React, { useEffect,useState } from 'react'
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';
import {getAllWorkouts} from '../Services/Workouts'
const today = new Date();
const HeatMapActivity = () => {

    const user=JSON.parse(localStorage.getItem('user'));

    const [value,setValues]=useState([])
    const getActivity=async()=>{
            const resp=await getAllWorkouts()
            if(resp){
            const values=resp.map((name, index) => {
                return { date: name.createdAt.slice(0,10), count:100 };
            });
          setValues(values)
        }
        else{
            
        }
    }

    useEffect(()=>{
        getActivity()
    },[ ])
   

    var color='#a78bfa'
    const [selected, setSelected] = useState('')
  return (
    <div className='flex md:items-center justify-center  overflow-x-scroll  flex-wrap pb-10'>
  
  <div className='hidden lg:block'>
  <HeatMap
    width={1200}
    rectSize={20}
    space={2}
    panelColors={{ 0: '#FFF', 8: '#a78bfa', 4: '#a78bfa', 12: '#a78bfa', 32: '#a78bfa' }}
    value={value}
    monthLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
    weekLabels={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
    startDate={new Date('2024/01/01')}
    legendCellSize={0}
  />
</div>
<div className='block lg:hidden overflow-x-scroll '>
  <HeatMap 
    width={400}
    rectSize={10}
    space={2}
    panelColors={{ 0: '#FFF', 8: '#a78bfa', 4: '#a78bfa', 12: '#a78bfa', 32: '#a78bfa' }}
    value={value}
    monthLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
    weekLabels={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
    startDate={new Date('2024/01/01')}
    legendCellSize={0}
  />
</div>


  </div>
   

  )
}

export default HeatMapActivity
