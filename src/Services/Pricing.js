const base_url="http://localhost:3000"
//const base_url="https://gymbromiddleware.onrender.com"

export const subscripePlan=async()=>{

    const email=JSON.parse(localStorage.getItem('user')).email
      try {
          const response = await fetch(`${base_url}/payments/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin':' http://192.168.1.4:3000',
  
            },
            body: JSON.stringify({plan:'PRO',email:email})
        })

          return await response.json();
          
        } catch (error) {
          throw new Error(error);
        }
      };