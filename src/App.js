import { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import TopNavigation from './components/TopNavigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios';

function App() {

  useEffect(()=>{
    axios.defaults.baseURL = 'http://localhost:2407';
  },[])
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/topnavigation' element={<TopNavigation/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
