import { useState,useRef, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { setAuthenticated } from '../Store/authSlice';
import axios from 'axios';
import '../CSS/Login.css';

const Login =()=>{
    const emailRef=useRef();
    const passRef=useRef();
    const [err,setErr] =useState('');

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch =useDispatch();
    const navigate=useNavigate();

    useEffect(() => {
      if(isAuthenticated) navigate("/",{replace:true});
    }, [isAuthenticated,navigate])
    
    
    const submitHandler=async(e)=>{
        e.preventDefault();
        
        
        setErr("");
        const email=emailRef.current.value;
        const password=passRef.current.value;

        if(email.trim() && password.trim()){
            const res=await axios.post('http://localhost:8000/auth/login',{
                data:{
                    email:email,
                    password:password
                }
            });
            if(res.data.cnt==0){
                setErr("Either of email or password is wrong");
            }else{
                // nav('/');
                dispatch(setAuthenticated([true,email]));
            }
            
        }
        else{
            setErr("Input field can't be empty");
        }
    };

    return(
        <>
            <div className="container login_container">
                <div className="login_form">
                    {err && <p style={{"color":"red","textAlign":"center"}}>*{err}</p>}
                    <form>
                        <div className='input_field'>
                            <label>Email</label>
                            <input type="text" placeholder='abc@gmail.com' ref={emailRef}></input>
                        </div>
                        <div className='input_field'>
                            <label>Password</label>
                            <input type="password" placeholder='password' ref={passRef}></input>
                        </div>
                        <div>
                            <button onClick={submitHandler}  type="submit" className='formSubmitButton'>Login</button>
                        </div>
                        <div style={{"textAlign":'center'}}>
                            <Link to="/register"> Create Account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;