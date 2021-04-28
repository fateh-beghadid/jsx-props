import React from "react";
import Profile from "./profile/profile_component"
import Image from "./profile/photo.jpg"
function App() {
   const handleName=(name)=>{
     alert(`name of profile user is ${name}`)
   }
  
  return (
    <div className="App">
      <Profile
      
      fullName="beghadid fateh"
      bio ="im a full stack web developer"
      profession="student"
      handleName={handleName}
      >

  <img style={{width:"400px",height:"auto"}} src={Image} alt="img"/>
      </Profile>
     

  




    </div>
  );
}

export default App;
