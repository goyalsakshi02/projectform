import React,{ useState } from "react";
import "./form.css"

export default function FormPractice() {
  const [inputs, setInputs] = useState({});
  const [errors,setErrors]  = useState({})

  const handleChange = (event) => {
      console.log(event.target.value,"1")
      console.log(event.target.name,"2")
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  console.log("====>dlm",inputs)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    validate()

  }

    
 function validate() {
     let isValid = true;
     let pattern 
     let allErrors = {};

    if (!inputs.username){
        isValid = false;
        console.log("please enter name ")
    }
    if (inputs.username !== undefined){
         pattern = new RegExp(/^[a-zA-Z ]/)
        isValid = false
        if (!pattern.test(inputs.username)) {
      
            isValid = false;
      
         console.log("please enter valid name")
      
        }
    }
     if(inputs?.usernamename?.length <= 3){
            isValid = false 
            console.log("please enter a name more than 3 characters")
        }
    
   
   
    if (inputs.phnumber !== "undefined") {

          pattern = new RegExp(/^[0-9\b]+$/);
            isValid = false 
        
            if (!pattern.test(inputs.phnumber)) {
      
            isValid = false;
      
         console.log("please enter valid phnumber of length 10",inputs.phnumber)
      
             }
             else if(inputs.phnumber.length !== 10){
      
          isValid = false;
      
          console.log("please enter valid phnumber of length 10.",inputs.phnumber)
      
        }
        else if(!inputs.phnmuber) {
            isValid = false
            console.log("please enter valid phnumber of length 10")
        }
      
      }
      
      if (!inputs.email !== "undefined") {

        pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
          isValid = false 
      
          if (!pattern.test(inputs.email)) {
    
          isValid = false;
    
          console.log("please enter valid email",inputs.email)
    
      }
    }
    else if (inputs.email == " ") {
        isValid = false;
        console.log("invalid email")
    }

    if(!inputs.country) {
        isValid = false;
        console.log("please enter the required country field")
    } else {
        if (inputs.country){
        pattern = new RegExp(/^[a-zA-Z ]{2,30}$/)
        isValid = false;
        
        if (!pattern.test(inputs.country)){
            console.log("please enter a valid country name ")
            }
    
        }
    }

    if(!inputs.age){
        isValid = false;
        console.log("enter a required field age ")
    }

    if (!inputs.password){
        isValid = false;
        console.log("enter a valid password filed ")
    }
      return isValid
   
 }

  return (
    <div className="form">
    <div className="flex-container">
        <div className="heading">Form</div><br />
    <div className="wrap">
    <form onSubmit={handleSubmit}>
      <input placeholder="Enter your Name"
        type="text" 
        name="username"
        value={inputs?.username || ""} 
        onChange={handleChange}
      />
      {/* <div>{inputs.errors?.username?inputs.errors.usename:null}</div> */}
      <br />
        <input 
          placeholder="Enter your Age:"
          type="text" 
          name="age" 

          value={inputs.age || ""} 
          onChange={handleChange}
        />
        {errors?.age || ""}<br />
        <input 
        placeholder="Enter your Email:"
          type="text" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
       <br />
        <input 
          placeholder="Enter your Phone.no:"
          type="text" 
          name="phnumber"
          value={inputs.phnumber || ""} 
          onChange={handleChange}
        />
        <br />
        <input 
        placeholder=" Enter your Country:"
          type="text" 
          name="country" 
          value={inputs.country || ""} 
          onChange={handleChange}
        />
      <br />
        <input 
          placeholder="Enter your Password:"
          type="text" 
          name="password" 
          value={inputs.password || ""} 
          onChange={handleChange}
        /><br />
        <input
        type="checkbox" />
        <label className="checkbox"> I accept all terms & conditions 
        </label><br />
        <div className="submit">
        <input type="submit" />
        </div><br />
        <div className="account">
            <div>Already have an account?<a href="url">Sign in</a></div>
            </div>
    </form>
    </div>
    </div>
    </div>
  )
}
