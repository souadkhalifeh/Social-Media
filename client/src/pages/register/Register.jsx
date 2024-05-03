import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs]=useState({
    username:"",
    email:"",
    password:"",
    name:"",
  });

  const [err, setErr]=useState(null);

  const handleChange=e=>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  };
  console.log(inputs);
  const handleClick = async e=>{
    e.preventDefsult()

    try{
      await axios.post("http//localhost:3000/api/auth/register",inputs);
    }catch(err){
      setErr(err.response.data)
    }
  };
  
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Tawasol</h1>
          <p>
          Welcome to Tawasol, your social connection platform! Join our vibrant community and connect with friends, share moments, and discover new experiences together. Sign in to start your Tawasol journey today!
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
            <input type="password" placeholder="Password"name="password" onChange={handleChange} />
            <input type="text" placeholder="Name" name="name" onChange={handleChange} />
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
