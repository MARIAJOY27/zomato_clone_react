import { faCaretDown, faChevronDown, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
     
     <div className='max-width header'>
        <Link to={'/'}><img className='mt-3' src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomato-logo" /></Link>
        <div className='header-right'>
          <div className='header-location-search-container ms-4 mt-3'>
            <div className='location-wrapper'>
              <div className='location-icon'>
              <FontAwesomeIcon className='icon mt-2 ms-2 me-2' icon={faLocationDot} style={{color: "#f792b0",}} size='xl'/>
              <div className='mt-2'>Kochi</div>
              </div>
              <FontAwesomeIcon className='mt-2' icon={faCaretDown}  style={{color: "#353536",}} size='xl' />
            </div>
            <div className='location-search-seperator mt-2'></div>
            <div className='header-searchbar'>
            <FontAwesomeIcon className='ms-3 mt-2' icon={faMagnifyingGlass} style={{color: "#8f8f8f",}} />
            <input className='search-input ms-2 mt-1' type="text" placeholder='Search for restaurant,cuisine or a dish' />
            </div>
          </div>
          <div className='profile-wrapper'>
            <img className='header-profile-image h-50 w-25' src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="profile" />
            <span className='header-username me-3'>Maria</span>
            <FontAwesomeIcon className='me-4' icon={faChevronDown} style={{color: "#121212",}} />
          </div>
        </div>
     </div>

    </>
  )
}

export default Header
