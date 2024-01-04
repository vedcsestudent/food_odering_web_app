import React from "react";
import classes from "./navbar.module.css";
import {Link} from "react-router-dom";
import {useState} from "react";
import {AiOutlineUser,AiOutlineShoppingCart} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logout from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux";
const Navbar=()=>
{
  const dispatch=useDispatch();

  const navigate=useNavigate();
    const [isScroll, setIsScroll]=useState(false);
    const {products}=useSelector((state)=>state.cart)
    window.onscroll=()=>
    {
        setIsScroll(window.scrollY===0?false:true)
        return ()=>{window.onscroll=null};
    }

    const handleLogout=()=>
    {
        dispatch(logout);
        navigate('/login');
    }
    
    
   

    return (<div className={`${classes.container} ${isScroll&& classes.scrolled}`}>

    <div className={classes.wrapper}>
        <div className={classes.left}>
            <Link to="/" className={classes.title}>
                FoodDelivery
            </Link>
        </div>
        <div className={classes.center} >
            <ul className={classes.list}>
                <li className={classes.listItem}>
                    <a href="#">Home</a>
                </li>
                <li className={classes.listItem}>
                    <a href="#contacts">contacts</a>
                </li>
                <li className={classes.listItem}>
                    <a href="#foods">Foods</a>
                </li>
                <li className={classes.listItem}>
                    <a href="#faq">FAQ</a>
                </li>
                <li className={classes.listItem}>
                    <Link to="/create">Create</Link>
                </li>
            </ul>
        </div>
        <div className={classes.right}>
            <AiOutlineUser className={classes.userIcon}/>
            <Link to="/cart" className={classes.cartContainer}>
                <AiOutlineShoppingCart className={classes.cartIcon}/>
                <div className={classes.cartQuantity}>{products.length}</div>
            </Link>
            <button className={classes.logout}onClick={handleLogout}>Logout</button>
        </div>


    
       
        
    </div>
    
    
          
    
      
    </div>)
}

export default Navbar;