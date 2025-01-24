import React from 'react'
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const Header = ({handleTogglesidebar}) => {
  return (
    <div className='header'>
      <FaBars className='header__menu' size={26} onClick={()=> handleTogglesidebar()}/>
      <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" className='header__logo'/>
      
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
