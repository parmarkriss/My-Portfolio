import React, { useState } from 'react'
import "./_categoriesbar.scss";

const keywords = [
  "Film Animation",
  "Autos Vehicles",
  "Music",
  "Pets Animals",
  "Sports",
  "Travel Events",
  "Gaming",
  "People Blogs",
  "Comedy",
  "Entertainment",
  "News Politics",
  "How-to Style",
  "Education",
  "Science Technology",
  "Nonprofits Activism",
  "Movies",
  "Shows"
];


const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState('All');

  const handleClick = (value) =>{
    setActiveElement(value)
  }

  return (
    <div className='categoriesbar'>
      {
         keywords.map((value,i)=> <span key={i} onClick={()=> handleClick(value)} className={activeElement === value ? 'active' : ''}>{value}</span>)
      }

    </div>
  )
}

export default CategoriesBar