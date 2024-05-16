const email=localStorage.getItem('email')
export const createNewWorkoutTemplate=async(template)=>{

    //const email = JSON.parse(localStorage.getItem('user')).email;
    try {
        const response = await fetch(`https://gymbromiddleware.onrender.com/workoutTemplates`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':' http://192.168.1.4:3000',

          },
          body: template
      })

        return await response.json();
        
      } catch (error) {
        throw new Error(error);
      }
    };

export const getAllWorkoutTemplates = async()=>{
 
  try {
    const response = await fetch(`https://gymbromiddleware.onrender.com/workoutTemplates?email=${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        

      },
  })

    return await response.json();
    
  } catch (error) {
    throw new Error(error);
  }
};

export const updateWorkoutTemplate=async(template,id)=>{
console.log(id)
console.log(template)
  try {
    const response = await fetch(`https://gymbromiddleware.onrender.com/workoutTemplates/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':' http://192.168.1.4:3000',
      },
      body: template
  })

    return await response.json();
    
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteWorkoutTemplate=async(id)=>{

  try{
    const response=await fetch(`https://gymbromiddleware.onrender.com/workoutTemplates/${id}`,{
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

