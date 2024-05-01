const email="mitheshsrini@gmail.com"
export const createNewWorkoutTemplate=async(template)=>{

    //const email = JSON.parse(localStorage.getItem('user')).email;
    try {
        const response = await fetch(`http://localhost:3000/workoutTemplates`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'http://localhost:3000',

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
    const response = await fetch(`http://localhost:3000/workoutTemplates?email=${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'http://localhost:3000',

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
    const response = await fetch(`http://localhost:3000/workoutTemplates/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'http://localhost:3000',
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
    const response=await fetch(`http://localhost:3000/workoutTemplates/${id}`,{
      method:'DELETE',
      headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin':'http://localhost:3000',
            },
    })
    console.log(response)
    //return await response.json();

  }
  catch(err){
    throw new Error(err);
  }
}

