import React from 'react'
import LOGO from '../assets/images/logo-no-background.png'

const Header = () => {
  return (
    <header id='header' className='header d_flex align-i-center'>
        <div className='logo_container'>
            <img className='logo' src={LOGO} />
        </div>
        <div className='nav_container d_flex '>
            <nav className='nav_container_inner'>
                <ul className='ul_normal d_flex'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
            <div className='user_info'>
                <ul className='ul_normal d_flex'>
                    <li>Cart</li>
                    <li>User</li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header