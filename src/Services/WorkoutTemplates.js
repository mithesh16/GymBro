
//const base_url="http://localhost:3000"
const base_url="https://gymbromiddleware.onrender.com"

export const createNewWorkoutTemplate=async(template)=>{

  const email=JSON.parse(localStorage.getItem('user')).email
    try {
        const response = await fetch(`${base_url}/workoutTemplates`, {
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
  const email=JSON.parse(localStorage.getItem('user')).email
  try {
    const response = await fetch(`${base_url}/workoutTemplates?email=${email}`, {
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
  const email=JSON.parse(localStorage.getItem('user')).email
console.log(id)
console.log(template)
  try {
    const response = await fetch(`${base_url}/workoutTemplates/${id}`, {
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
  const email=JSON.parse(localStorage.getItem('user')).email

  try{
    const response=await fetch(`${base_url}/workoutTemplates/${id}`,{
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

