import React from 'react'
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const Header = () => {
  return (
    <div className='header border border-dark'>
      <FaBars className='header__menu' size={26}/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4N37TIgWC_QLpspNwGddZH8DhzljeYMFnA&s" alt="" className='header__logo'/>
      <form action="">
        <input type="text" placeholder='Search'/>
        <button type='submit'>
          <AiOutlineSearch size={22}/>
        </button>
      </form>

      <div className="header__icon">
         <MdNotifications size={28}/>
         <MdApps size={28}/>
         <img src="https://imgcdn.stablediffusionweb.com/2024/3/24/17ee935b-c63a-4374-8fc3-91b2559e02f2.jpg" alt="" />
      </div>
    </div>
  )
}

export default Header
