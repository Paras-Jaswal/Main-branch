import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Component from './Components/Component';
import Signup from './Components/Signup & Login/Signup';
import Login from './Components/Signup & Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <>
   <Routes>
   <Route path='/' element={<Component/>} />
   <Route path='/sign-up/investor' element={<Signup/>} />
   <Route path='/login' element={<Login/>} />
   <Route path='/sign-up/wealth' element={<Signup/>} />
   <Route path='/dashboard' element={<Dashboard/>} />

   </Routes>
   </>
      );
}

export default App;
