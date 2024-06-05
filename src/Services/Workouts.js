
//const base_url="http://localhost:3000"
const base_url="https://gymbromiddleware.onrender.com"

export const createNewWorkout=async(activity)=>{
  const email=JSON.parse(localStorage.getItem('user')).email
    try {
        const response = await fetch(`${base_url}/workouts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':' http://192.168.1.4:3000',

          },
          body: activity
      })

        return await response.json();
        
      } catch (error) {
        throw new Error(error);
      }
    };

export const getAllWorkouts=async()=>{
  const email=JSON.parse(localStorage.getItem('user')).email
    try{
        const response= await fetch(`${base_url}/workouts?email=${email}`,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin':' http://192.168.1.4:3000',

  
            },
            
        })
        return await response.json();
    }
    catch(error){
        throw new Error(error);
    }
}



export const updateWorkout=async(workout,id)=>{
  const email=JSON.parse(localStorage.getItem('user')).email

      try {
        const response = await fetch(`${base_url}/workouts/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':' http://192.168.1.4:3000',

          },
          body: workout
      })
    
        return await response.json();
        
      } catch (error) {
        throw new Error(error);
      }
    };
    
    export const deleteWorkout=async(id)=>{
      const email=JSON.parse(localStorage.getItem('user')).email
    
      try{
        const response=await fetch(`${base_url}/workouts/${id}`,{
          method:'DELETE',
          headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin':' http://192.168.1.4:3000',

                },
        })
        console.log(response)
        //return await response.json();
    
      }
      catch(err){
        throw new Error(err);
      }
    }
    
    