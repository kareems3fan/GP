import React from 'react';
import { ReactDOM } from 'react';
import Adddoctor from "./pages/Adddoctor"
import Navbar from './pages/Navbar';
import Adminpage from './pages/Adminpage';
import Addrecord from './pages/Addrecord';
import Hero from './pages/Hero';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Myprofile from './pages/Myprofile';
export default function App() {
  return (
<body class= "bg-cover bg-blue-500">
<Router>
<Navbar/>
    <Routes >
      
        <Route path='/myprofile' element={<Myprofile/>} />
        <Route path='/login' element={<Hero/>} />}
        <Route path='/addrecord' element={<Addrecord/>} />
        <Route path='/adddoctor' element={<Adddoctor/>} />

       
    </Routes>
    </Router>
    </body>
  )
}