import React from 'react'
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='f_1'>
        <div className="flex flex-row justify-around items-center h-full">
            <Link to="">
            <div className="flex-initial">
                <img src="/images/home.svg" alt="" /> 
            </div>
            </Link>
            <Link to="">
            <div className="flex-initial">
                <img src="/images/cart.svg" alt="" />    
            </div>
            </Link>
            <Link to="">
            <div className="flex-initial">
                <img src="/images/notification.svg" alt="" />    
            </div>
            </Link>
            <Link to="">
            <div className="flex-initial">
                <img src="/images/profile.svg" alt="" />    
            </div>
            </Link>
        </div>
    </div>
  )
}


export default Footer;


{/* <div className="flex flex-row justify-around items-center h-full">
            <Link to="">
            <div id="home" onClick={h_1()} className="flex flex-initial footer_text items-center">
                <img src="/images/home.svg" alt="" /> 
                <div className='card-title text_2 pl-2'>Home</div>   
            </div>
            </Link>
            <Link to="">
            <div id="cart" onClick="c_1()"  className="flex flex-initial footer_text items-center">
                <img src="/images/cart.svg" alt="" />
                <div className='card-title text_2 pl-2'>Cart</div>  
            </div>
            </Link>
            <Link to="">
            <div id="notif" onClick="n_1()" className="flex flex-initial footer_text items-center">
                <img src="/images/notification.svg" alt="" />
                <div className='card-title text_2 pl-2'>Notification</div>     
            </div>
            </Link>
            <Link to="">
            <div id="profile" onClick="p_1()" className="flex flex-initial footer_text items-center">
                <img src="/images/profile.svg" alt="" />
                <div className='card-title text_2 pl-2'>Profile</div>     
            </div>
            </Link>
        </div> */}