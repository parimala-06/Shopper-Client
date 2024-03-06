import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import cart_icon from '../Assets/cart_icon.png'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import dropdown from '../Assets/dropdown.png'

const Navbar = () => {

  const [menu,setmenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
          <li onClick={()=>{setmenu("shop")}}><Link to='/' style={{textDecoration:'none', color: '#515151'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu("men")}}><Link to='/men' style={{textDecoration:'none', color: '#515151'}}>Men</Link>{menu==="men"?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu("women")}}><Link to='/women' style={{textDecoration:'none', color: '#515151'}}>Women</Link>{menu==="women"?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu("kids")}}><Link to='/kids' style={{textDecoration:'none', color: '#515151'}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link to='/login' style={{textDecoration:'none', color: '#515151'}}><button>Login</button></Link>}
          <Link to='/cart' style={{textDecoration:'none', color: '#515151'}}><img src={cart_icon} alt="cartIcon" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar