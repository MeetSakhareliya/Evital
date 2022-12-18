import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Auth=(props)=>{
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const navigate=useNavigate();

    useEffect(() => {
        // if(!isAuthenticated) navigate("/",{replace:true});
    }, [isAuthenticated])

  
    return (
        <>
            {props.children}
        </>
    );
}

export default Auth;