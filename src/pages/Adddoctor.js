
import  React,{Component,useState}   from 'react';
import { AiFillHome} from 'react-icons/fa';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateField } from '@mui/x-date-pickers/DateField';
import { Divider } from '@mui/material';




function Adddoctor () {
  const getInitialState = () => {
    const value = "Orange";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  
    return(
      <div class="mx-auto bg-blue-500 max-w-2xl mt-20 ">
<form >
        <div>
          <h1 class="text-4xl font-bold">Doctor information</h1>
         </div>
        <div class="flex space-x-4">
          <div class="w-1/2">
            <label >First Name</label>
            
            <input
           
              class="border border-gray-400 px-4 py-2 rounded w-full"
              type="text"
              name="firstname"
              id="firstname"
            />
          </div>
          <div class="w-1/2">
            <label >Last Name</label>
            <input
            
              class="border border-gray-400 px-4 py-2 rounded w-full"
              type="text"
              name="lastname"
              id="lastname"
            />
          </div>
        </div>
        <div class="flex space-x-4">
          <div class="w-1/2">
          <label class="block mb-0.2  text-gray-900" >hospital</label>
          <select id="hosbital"  class="bg-gray-50 border border-gray-300 w-44 text-gray-900 text-md rounded-lg">
                <option value="${}"></option>
                <option value="${}"></option>
              </select>
          </div>
          <div class="w-1/2">
          <label >National id</label>
          <input
          
         
            class="border border-gray-400 px-4 py-2 rounded w-full "
            type="text"
            name="id"
            id="user_id"
            />
          </div>
        </div>
        
        
        
        <div >
          <label >Email address</label>
          <input
          
         
            class="border border-gray-400 px-4 py-2 rounded w-full "
            type="text"
            name="email"
            id="email"
          />
         
        </div>
        <div >
          <label  >Current Address</label>
          <input
         
           
            class="border border-gray-400 px-4 py-2 rounded w-full "
            type="text"
            name="address"
            id="address"
          />
         
        </div>
        <div class="flex space-x-4">
          <div class="w-1/2" >
            <label for="birthdate" class="block mb-0.2  text-gray-900">Birthdate</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DateField']}>
                      <DateField label="" />
                      </DemoContainer>
                </LocalizationProvider>
          </div>
       
          <div class="w-1/2" >

              <label for="gender" class="block mb-2  text-gray-900">Gender..</label>
              <select value={value} onChange={handleChange} id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg">
                <option value="male"  >Male</option>
                <option value="female">Female</option>
              </select>
              

    
           
          </div>
 
           
          
         
        </div>

       
      </form>
      </div>
        
    )
  
}
export default Adddoctor;
