
import  React,{Component,useState}   from 'react';






function Addrecord () {
  const getInitialState = () => {
    const value = "Orange";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  
    return(
      <div class="mx-auto bg-blue-500 max-w-2xl mt-14 space-y-6">
<form >
        <div>
          <h1 class="text-4xl font-bold">Add record</h1>
          <p class="mb-2 ">Enter patient information</p>
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
        <div class="w-1/2 mt-2">
          <label class="block  text-gray-900" >Age</label>
         
          <input
           
           class="border border-gray-400 px-4 py-2 rounded w-full"
           type="text"
           name="age"
           id="age"
         />
          </div>
       
          <div class="w-1/2 mt-2" >

              <label for="gender" class="block   text-gray-900">Gender..</label>
              <select value={value} onChange={handleChange} id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg">
                <option value="male"  >Male</option>
                <option value="female">Female</option>
              </select>
              

    
           
          </div>
          
 
           
          
         
        </div>
        <div class="flex space-x-4">
            <div class="w-1/2">
            <label class="block mt-2 text-gray-900" >Diagnosis</label>
         
         <input
          
          class="border border-gray-400 px-4 py-4 rounded w-full"
          type="text"
          name="diagnosis"
          id="diagnosis"
        />
            </div>
            <div class="w-1/2">
            <label class="block mt-2 text-gray-900" >Symptoms</label>
         
         <input
          
          class="border border-gray-400 px-4 py-4 rounded w-full"
          type="text"
          name="age"
          id="age"
        />
            </div>
        </div>

       
      </form>
      </div>
        
    )
  
}
export default Addrecord;
