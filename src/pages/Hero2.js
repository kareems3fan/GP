import React from 'react'
import Navbar from './Navbar';
import Navbar2 from './Navbar2';

const Hero2 = () => {
  return (
    <div class="h-screen bg-blue-500">
    <Navbar2/>
    <body class="mt-28 bg-blue-500 ">
    
    <div class="p-10 ml-16 mr-16  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-3 gap-28">



      <div class=" rounded overflow-hidden shadow-none">
      <button>
       <img  class="w-64 h-64flex items-center justify-center rounded-full
       transition-transform duration-500 transform hover:scale-75
       " src={require('./AddRec.jpg')} 
        alt="logo"/>
       <p class=" hover:text-white text-neutral-900 mt-3 mb-3 
        font-mono text-lg font-extrabold 
          py-2 px-10   rounded-lg focus:outline-none focus:shadow-outline">Add Record</p>
      </button>
      
      </div>
    



     <div class=" rounded overflow-hidden shadow-none">
      <button>
       <img  class="w-64 h-64flex items-center justify-center rounded-full
       transition-transform duration-500 transform hover:scale-75
       " src={require('./Dashb.jpg')} 
        alt="logo"/>
        <div class="py-2 px-10 mr-20"><p class=" hover:text-white text-neutral-900 mt-3 mb-3 
       font-mono text-lg font-extrabold 
        w-72 rounded-lg focus:outline-none focus:shadow-outline">View Dashboard</p></div>
       
      </button>
      </div>




   
     <div class=" rounded overflow-hidden shadow-none">
      <button>
       <img  class="w-64 h-64flex items-center justify-center rounded-full
       transition-transform duration-500 transform hover:scale-75
       " src={require('./warnin.jpg')} 
        alt="logo"/>
        
       <p class=" hover:text-white text-neutral-900 mt-3 mb-3 
       font-mono text-lg font-extrabold  
       py-2 px-10  w-52 rounded-lg focus:outline-none focus:shadow-outline">View Alerts</p>
      </button>
      
      </div>
      
      
    </div>
  

    </body>
  </div>
  )
}

export default Hero2;
