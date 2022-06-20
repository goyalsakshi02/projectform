import React, { useState } from "react";
import "./form.css";
import visibility from "./img/visibility.svg";
import visibilityOn from "./img/nonVisible.svg";

export default function FormPractice() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState([]);
  const [eye, setEye] = useState(false);


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setErrors("");
    
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    validate();
    console.log("all inputs", inputs)

  };

  function validate() {
    let isValid = true;

    if (!inputs?.username) {
      isValid = false;
      setErrors((errors) => ({ ...errors, ["username"]: "please enter name" }));
    } 
    else if (!/^[a-z]+$/.test(inputs.username)){
        
           
            isValid = false;
            setErrors((errors) => ({
            ...errors,
            ["username"]: "please enter a valid name ",
            }));
        
          }
    
    
    else if (!inputs?.age) {
        isValid = false;
        setErrors((errors) => ({
          ...errors,
          ["age"]: "please enter a valid age ",}));
    } 
    
    else if (!/^[1-9]*$/.test(inputs.age)) {
        isValid = false;
        setErrors((errors) => ({
            ...errors,["age"]: "please enter a valid age ",}));
    } 

    else if (!inputs.email) {
        isValid = false;
        setErrors((errors) => ({...errors, ["email"]: "please enter a valid e-mail "}));
    }

    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs.email) ) {
     
        isValid = false;

        setErrors((errors) => ({...errors,["email"]: "please enter a valid e-mail "}));
    }
      
      
    else if (!inputs.phnumber){
        isValid = false;
        setErrors(errors => ({...errors, ["phnumber"]:"please enter a valid phnumber "}))
    }

    else if (!/^[0-9]{10}$/.test(inputs.phnumber)) {
        isValid = false;
        setErrors(errors => ({...errors, ["phnumber"]:"please enter a valid phnumber "}))
    }

    else if (!inputs.country) {
        isValid = false;
        setErrors((errors) => ({
          ...errors,
          ["country"]: "please enter a valid country name ",
        }));
    }

   else if (!/^[a-zA-Z ]{2,30}$/.test(inputs.country)) {
        isValid = false;
        setErrors((errors) => ({
          ...errors,
          ["country"]: "please enter a valid country name ",
        }));
    }
  
  else  if (!inputs.password) {
      isValid = false;
      setErrors((errors) => ({
        ...errors,
        ["password"]: "please enter a password ",
      }));
    }
  else if (!/^[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(inputs.password)) {
        isValid = false;
        setErrors((errors) => ({
          ...errors,
          ["password"]: "please enter a valid password",
        }));
    }

  else if (!/^[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(inputs.password)) {
        isValid = false;
        setErrors((errors) => ({
          ...errors,
          ["password"]: "please enter a valid password",
        }));
    }
  else  if (!inputs?.checkbox){
        isValid = false;
        setErrors((errors) => ({
        ...errors,
        ["checkbox"]: "please accept terms $ condition",
    }))  
   }
   
   
  else {
    
    setErrors("");
  }


    return isValid;
  }
    
  return (
    <div className="form">
      <div className="flex-container">
        <div className="heading">Form</div>
        <br />
        <div className="wrap">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Enter your Name"
              autoComplete="off"
              type="text"
              name="username"
              value={inputs?.username || ""}
              onChange={handleChange}
            />
            <div className="error" style={{ color: "red" }}>
              {errors?.username ? errors.username : null}
            </div>
            <br />
            <input
              placeholder="Enter your Age:"
              autoComplete="off"
              type="text"
              name="age"
              value={inputs.age || ""}
              onChange={handleChange}
            />
            <div className="error" style={{ color: "red" }}>{errors?.age ? errors.age : null}</div>
            <br />
            <input
              placeholder="Enter your Email:"
              autoComplete="off"
              type="text"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
            <div className="error" style={{ color: "red" }}>{errors?.email? errors.email : null}</div>
            <br />
            <input
              placeholder="Enter your Phone.no:"
              autoComplete="off"
              type="text"
              name="phnumber"
              value={inputs.phnumber || ""}
              onChange={handleChange}
            />
            
            <div className="error" style={{ color: "red" }}>
              {errors?.phnumber ? errors.phnumber : null}
            </div>
            <br />
            <input
              placeholder=" Enter your Country:"
              autoComplete="off"
              type="text"
              name="country"
              value={inputs.country || ""}
              onChange={handleChange}
            />
            <div className="error" style={{ color: "red" }}>
              {errors?.country ? errors.country : null}
            </div>
            <br />
            <div className="eye" style={{ position: "relative" }}>
              <input
                placeholder="Enter your Password:"
                autoComplete="off"
                type={eye ? "text" : "password"}
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
              />
              <span
                onClick={() => {
                  setEye(!eye);
                }}
                style={{ position: "absolute", top: "35%", right: "10%" }}
              >
                <img
                  height={20}
                  src={eye ? visibility : visibilityOn}
                  alt="eye"
                />
              </span>
              <br />
            </div>
            <div className="error" style={{ color: "red" }}>
              {errors?.password ? errors.password : null}
            </div>
            <br />
            <div style={{ padding: "17px" }}>
              <input 
              type="checkbox"  
              value = {inputs.checkbox|| false }
              onChange = {(e) => inputs['checkbox']= e.target.checked}
              />
              <label className="checkbox">
                {" "}
                I accept all terms & conditions
              </label></div> <br /><div className="error" style={{ color: "red" }}> 
              {errors?.checkbox ? errors.checkbox : null}
            </div>
            <br />
            <div className="submit">
              <input type="submit" />
            </div>
            <br />
            <div className="account">
              <div>
                Already have an account?<a href="url">Sign in</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
