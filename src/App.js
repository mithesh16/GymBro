import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Workouts from './Pages/Workouts';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Activity from './Pages/Activity';
import Pricing from './Pages/Pricing';
import Team from './Pages/Team';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      {/* <div className='loginpages'>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        </Routes>
      </div> */}
     
      <div className='pages'>
      
        <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/signup' element={<SignUp/>}/>
          <Route path='/home' element={<> 
          <NavBar/>
          <Home/>
          </>}/>
          <Route path='/workouts' element={<> 
          <NavBar/>
           <Workouts/></>}/>
           <Route path='/activity' element={<> 
          <NavBar/>

           <Activity/></>
          }/>
          <Route path='/pricing' element={<> 
          <NavBar/>

           <Pricing/></>
          }/>
           <Route path='/team' element={<> 
          <NavBar/>

           <Team/></>
          }/>
         
        </Routes>
      </div>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
