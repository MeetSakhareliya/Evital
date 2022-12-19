import { Link, Outlet } from 'react-router-dom';
import logo from '../assest/images/logo.jpg';
import '../CSS/Header.css';
import { useSelector,useDispatch } from 'react-redux';
import { setUnAuthenticated } from '../Store/authSlice';

const Header=()=>{
    const linkStyle={textDecoration: 'none'};
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch =useDispatch();

    const logouthandler=()=>{
        dispatch(setUnAuthenticated());
    }
    
    return(
        <>
            <div className="Header_container">
                <div className="left">
                    <img src={logo} className="logo"/>
                </div>
                <div className="right">
                    <div><Link style={linkStyle} to="/" >Home</Link></div>
                    {/* <div><Link style={linkStyle} to="/aboutus" >About Us</Link></div> */}
                    {isAuthenticated && <div><Link style={linkStyle} to="/cart" >Cart</Link></div>}
                    {isAuthenticated && <div><Link style={linkStyle} to="/order" >Order</Link></div>}
                    {!isAuthenticated && <div><Link style={linkStyle} to="/login" >Login</Link></div>}
                    {isAuthenticated && <button onClick={logouthandler} className='formSubmitButton logout'>Logout</button>}
                </div>
            </div>
            <Outlet/>
            
        </>
    )
};

export default Header;