import React from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';


//import link
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      {/*home logo*/}
      <Link to={'/'} className='max-w-[200px]'>
      <img src={Logo} alt='' />
      </Link>
      {/*nav - initially hidden - show on desktop mode */}
      <nav className='hidden xl:flex gap-x-12 font-semibold'>
        <Link to={'/'} className='text-[#696c6d] hover:text-[red] transition'>
          Home
        </Link>
        <Link to={'/about'} className='text-[#696c6d] hover:text-[red] transition'>
          About
        </Link>
        <Link to={'/portfolio'} className='text-[#696c6d] hover:text-[red] transition'>
          Portfolio
        </Link>
        <Link to={'/contact'} className='text-[#696c6d] hover:text-[red] transition'>
          Contact
        </Link>
      </nav>
      </div> 

      {/*Social*/}
      <Socials />
      {/*mobile nav*/}
      <MobileNav />
    </header>;
};

export default Header;
