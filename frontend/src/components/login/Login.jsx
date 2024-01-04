import React from "react";
import classes from "./login.module.css";
import {useState} from "react";
import img from "../../assets/womaneating2.jpg";
import {useDispatch} from "react-redux";
import {Link , useNavigate } from "react-router-dom";
import {login} from "../../redux/authSlice";
const Login=()=>
{
    const [password,setPassword]= useState("");
    const [email, setEmail]= useState("");
    const [error, setError]=useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleLogin=async (e)=>
    {
        e.preventDefault()//for preventing the refresh
        try{
            const res=await fetch("http://localhost:5000/auth/login",
            {headers:{'content-Type':"application/json"},
        method:"POST",
        body:JSON.stringify({email,password}
        )})
        const data=await res.json()
       dispatch(login(data))
        navigate("/")

        }catch(error)
        {
            setError(true)
            setTimeout(()=>{
                setError(false)
            },3000)
        }


    }
    return (<div className={classes.loginContainer}>
        <div className={classes.loginWrapper}>
            <div className={classes.loginLeftSide}>
                <img src={img} className={classes.leftImg}/>

            </div>
            <div className={classes.loginRightSide}>
                <h2 className={classes.title}>Login</h2>
                <form onSubmit={handleLogin} className={classes.loginForm}>
                    <input type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
                    <button className={classes.submitBtn}>Login </button>
                    <p> Dont't have an account? <Link to="/signup"> Signup</Link></p>
                </form>
                {
                    error&&<div className={classes.errorMessage}>
                    Wrong credentials  try different ones.</div>
                }
            </div>
        </div>
    </div>)
}

export default Login;