import React from 'react'


const Adminpage= () => {
  return (
    <div class="h-screen bg-blue-500">

    <body class=" bg-blue-500 ">
    
    <div class="p-10 ml-44 mr-16  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-28">



      <div class=" rounded overflow-hidden shadow-none mt-20">
      <button>
       <img  class="w-64 h-64flex items-center justify-center rounded-full
       transition-transform duration-500 transform hover:scale-75
       " src={require('./1114161.png')} 
        alt="logo"/>
       <p class=" hover:text-white text-neutral-900 mt-3 mb-3 
        font-mono text-lg font-extrabold 
          py-2 px-10   rounded-lg focus:outline-none focus:shadow-outline">Add Doctor profile</p>
      </button>
      
      </div>
    



     <div class=" rounded overflow-hidden shadow-none my-20">
      <button>
       <img  class="w-64 h-64flex items-center justify-center rounded-full
       transition-transform duration-500 transform hover:scale-75
       " src={require('./1114190.png')} 
        alt="logo"/>
        <div class=" mx-auto">
            <p class=" hover:text-white text-neutral-900 
       font-mono text-lg font-extrabold 
        w-72 rounded-lg focus:outline-none focus:shadow-outline">Edit doctor profile</p></div>
       
      </button>
      </div>




   
    
      
    </div>
  

    </body>
  </div>
  )
}

export default Adminpage;