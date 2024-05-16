

const email=localStorage.getItem('email')
export const createNewWorkout=async(activity)=>{
  console.log(activity)
    //const email = JSON.parse(localStorage.getItem('user')).email;
    try {
        const response = await fetch(`https://gymbromiddleware.onrender.com/workouts`, {
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
    try{
        const response= await fetch(`https://gymbromiddleware.onrender.com/workouts?email=${email}`,{
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

      try {
        const response = await fetch(`https://gymbromiddleware.onrender.com/workouts/${id}`, {
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
    
      try{
        const response=await fetch(`https://gymbromiddleware.onrender.com/workouts/${id}`,{
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
    
    