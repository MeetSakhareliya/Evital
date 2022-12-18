import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState,useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated } from "../Store/authSlice";

const Register = () => {
    const emailRef=useRef();
    const passRef=useRef();
    const [err,setErr] =useState('');


    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch =useDispatch();
    const navigate=useNavigate();

    useEffect(()=>{
        if(isAuthenticated) navigate("/",{replace:true});
    },[navigate,isAuthenticated]);

    const submitHandler=async(e)=>{
        e.preventDefault();
        setErr("");
        const email=emailRef.current.value;
        const password=passRef.current.value;

        
        if(email.trim() && password.trim()){
            const res=await axios.post('http://localhost:8000/auth/register',{
                data:{
                    email:email,
                    password:password
                }
            });
            console.log(res);
            if(res.data.err){
                if(res.data.errno==1062)
                setErr("Email is already in use");
            }else {
                dispatch(setAuthenticated([true,email]));
                // setAuthenticated(true);
            }
        }
        else{
            setErr("Input field can't be empty");
        }
        
    };
  return <>
            <div className="container login_container">
                <div className="login_form">
                    {err && <p style={{"color":"red","textAlign":"center"}}>*{err}</p>}
                    <form>
                        <div className='input_field'>
                            <label>Email</label>
                            <input type="email" placeholder='abc@gmail.com' ref={emailRef}></input>
                        </div>
                        <div className='input_field'>
                            <label>Password</label>
                            <input type="password" placeholder='password' ref={passRef}></input>
                        </div>
                        <div>
                            <button onClick={submitHandler}  type="submit" className='formSubmitButton'>Register</button>
                        </div>
                        <div style={{"text-align":'center'}}>
                            <Link to="/login"> Already have? Login</Link>
                        </div>
                    </form>
                </div>
            </div>
  </>;
};

export default Register;
