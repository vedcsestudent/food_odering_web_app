import React from "react";
import classes from "./signup.module.css";
import {Link} from "react-router-dom";
import img from "../../assets/womaneating.jpg";
import {useState} from "react";
import {register} from "../../redux/authSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom"
const Signup=()=>
{
    const [password, setPassword]= useState("");
    const [email, setEmail]= useState("");
    const[error, setError]= useState(false);
    const [username,setUsername]=useState("");
    const navigate= useNavigate();
    const dispatch=useDispatch();
    const handleSignUp=async(e)=>
    {
            e.preventDefault();
            try{
                
                const res=await fetch("http://localhost:5000/auth/register",{headers:{
                    "Content-Type":"application/json"
                }
            ,
        method:"POST",
    body:JSON.stringify({username,email,password})})
    const data=await res.json();
    dispatch(register(data))
    navigate('/')
            }
            catch(error)
            {
                setError(true);
                setTimeout(()=>{
                    setError(false)
                },3000)
            }
    }

    return (
       <div className={classes.signUpContainer}>
        <div className={classes.signUpWrapper}>
            <div className={classes.signUpLeftSide}>
                <img src={img}  className={classes.leftImg} alt="image"/>
            </div>
            <div className={classes.signUpRightSide}>
                <h2 className={classes.title}> Sign up</h2>
                <form onSubmit={handleSignUp} className={classes.signUpForm} >

                    <input type="text" placeholder="enter user name" 
                    onChange={(e)=>setUsername(e.target.value)}/>

                    <input type="email" placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)}/>

                    <input type ="password" placeholder="Type the password" onChange={(e)=>setPassword(e.target.value)}/>

                    <button className={classes.submitBtn} >Sign Up</button>

                    <p> Aleady have an Account?  <Link to="/login">Login</Link></p>
                </form>
                {
                    error&&(
                        <div className={classes.errorMesessage}>
                        Wrong Cedentials! Try different ones.
                        </div>
                    )
                }
            </div>
        </div>
       </div>
    )
}

export default Signup;