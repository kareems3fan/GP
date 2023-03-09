import React,{Component} from "react"
import {FaBriefcaseMedical} from 'react-icons/fa';
class Navbar extends Component 
{
 render ()
 {
    return(

    <nav class="bg-white border-gray-200 px-2 sm:px-4  rounded ">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    
  
  <a href="/home" class="flex items-center">    
  <FaBriefcaseMedical  />
        <span class="self-center text-xl font-semibold whitespace-nowrap">MedCare</span>
    </a>
    
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500  md:hidden" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
     
        <li>
          <a href="/home" class="block pl-3 pr-4 md:p-0" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/myprofile" class="block  pl-3 pr-4 md:p-0">My profile</a>
        </li>
     
        <a type="button" href="/login"  class="block text-white bg-blue-700 font-medium rounded-lg text-sm pl-3 pr-4  text-center mr-4 md:mr-0 ">Log in</a>
      </ul>
    </div>
  </div>
</nav>
     

    )
 } 
}
export default Navbar

