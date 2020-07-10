import React from 'react';
import { Link } from 'react-router-dom'
import './header-styles.scss'

const Header = () => (
    <div className="header">
         <div className="options">
                <div className="logo-container">
                    <Link to='/' className='logo'>Resonance Resort</Link>
                </div>
                <div className="others">
                    <Link to='/rooms' className='option'>Rooms</Link>
                    <Link to='/' className='option'>Bookings</Link>
                    <Link to='/login' className='option'>Login</Link>
                </div>
         </div>
    </div>
)

export default Header;