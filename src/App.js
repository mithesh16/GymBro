import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Workouts from './Pages/Workouts';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

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
         
        </Routes>
      </div>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
