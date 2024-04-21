"use client";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';




const navLinks = [
  {
    title: 'About me',
    path: '/about-me'
  },
  {
    title: 'Skills',
    path: '/skills'
  },
  {
    title: 'Projects',
    path: '/projects'
  },
  {
    title: 'Contacts',
    path: '/contacts'
  }
]



const Navbar = ( {onClose} ) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeMenu = () => {
    setNavbarOpen(false);
  };


  return (
    <nav className='josefin-sans fixed mx-auto top-0 left-0 right-0 z-10 bg-zinc-950 opacity-90'>
      <div className="flex container flex-wrap items-center justify-between mx-auto sm:px-16 p-4">
        <Link to='/' className='text-2xl md:text-4xl text-zinc-300 font-bold' onClick={closeMenu}>{"{ Chiara Bissolo }"}</Link>

        <div className='mobile-menu block md:hidden'>
          {!navbarOpen ? (
            <button onClick={() => {setNavbarOpen(true)}}
            className='flex items-center px-3 py-2 border rounded border-zinc-300 text-zinc-300 button-menu'>
              <FontAwesomeIcon icon={faBars} className='w-5 h-5'/>
            </button>
          ) : (
            <button onClick={() => {setNavbarOpen(false)}} 
            className='flex items-center px-3 py-2 border rounded border-zinc-300 text-zinc-300 button-menu'>
              <FontAwesomeIcon icon={faXmark} className='w-5 h-5'/>
            </button>
          )}
        </div>

        <div className='menu hidden md:block md:w-auto gradient-text bg-gradient-to-r' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.path} title={link.title}/>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      {/*{navbarOpen ? <MenuOverlay links={navLinks}/> : null}*/}
      {navbarOpen ? (
        <ul className="flex flex-col py-4 items-center gradient-text bg-gradient-to-b">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path} title={link.title} onClose={onClose}/>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;