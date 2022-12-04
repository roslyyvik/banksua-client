import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo-image.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Navbar = ({ toggleTheme }) => {
  const { user, logoutUser } = useGlobalContext()
const [ showLinks, setShowLinks ] = useState(false)
const linksContainerRef = useRef(null)
const linksRef = useRef(null)

const toggleLinks = () => {
  setShowLinks(!showLinks)
}

useEffect(() => {
  const linksHeight = linksRef.current.getBoundingClientRect().height
  if(showLinks){
    linksContainerRef.current.style.height = `${linksHeight}px`
  }else{
    linksContainerRef.current.style.height = '0px'
  }
},[showLinks])

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link className='logo-item' to='/'>
            <img src={logo} alt='logo' className='logo' />
            <span>BanksUA</span>
          </Link>
          <button className='nav-toggle' onClick={toggleLinks}><FaBars/></button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='nav-links' ref={linksRef}>
            <li>
              <Link to='/'>установи</Link>
            </li>
            <li>
              <Link to='/tables'>таблиця</Link>
            </li>
            <li>
              <Link to='/about'>про</Link>
            </li>
          </ul>
          <div class="toggle-container1">
            <input onChange={toggleTheme} type="checkbox" id="switch1" name="theme1" />
            <label for="switch1"></label>
          </div>
          {user && (
            <div className='nav-links'>
              <p>hello, {user.name}</p>
              <button
                className='btn btn-small'
                onClick={() => {
                  logoutUser();
                }}
              >
                logout
              </button>
            </div>
          )}
        </div>
        <div class="toggle-container">
          <input onChange={toggleTheme} type="checkbox" id="switch" name="theme" />
          <label for="switch"></label>
        </div>
      </div>
    </nav>
  )
}

export default Navbar