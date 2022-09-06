import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo2.png'
import Profile from '../assets/images/pp1.png'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import {BellIcon, SearchIcon} from '@heroicons/react/solid'

const Nav= () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return() => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`${isScrolled && 'bg-black transition duration-300'}`}>
      <div className="flex items-center">
        <img src={logo} alt={logo} className='object-contain w-20 md:w-28 mr-6 cursor-pointer' />

        <ul className='hidden md:flex space-x-4'>
          <li className='header__link'>Home</li>
          <li className='header__link'>TV Shows</li>
          <li className='header__link'>Movies</li>
          <li className='header__link'>New &amp; Popular</li>
          <li className='header__link'>My List</li>
        </ul>
      </div>

      <div className='flex items-center pr-3 text-white'>

        <ul className='flex items-center space-x-4'>
          <li>
            <SearchIcon className='h-4 w-6 md:h-6 md:w-6 cursor-pointer' />
          </li>
          <li className='hidden lg:inline'>
            <h4 className='cursor-pointer'>Kids</h4>
          </li>
          <li>
            <BellIcon className='w-4 h-4 md:w-6 md:h-6 cursor-pointer' />
          </li>
          <li className='flex items-center'>
            <img src={Profile} alt={Profile} className='w-8 h-8 md:w-10 md:h-10 cursor-pointer rounded' />
            <MdOutlineArrowDropDown className='h-6 w-6 hover:rotate-180 transition-all' />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav