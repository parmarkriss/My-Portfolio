import React, { useState } from 'react'
import "./_categoriesbar.scss";
import { useDispatch} from 'react-redux'
import { getVideosByCategory } from '../../redux/action/videos.action';

const keywords = [
  "All",
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
  "Education",
  "Science Technology",
  "Nonprofits Activism",
  "Movies",
  "Shows"
];


const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState('All');

  const dispatch = useDispatch()
  const handleClick = (value) =>{
    setActiveElement(value)
    dispatch(getVideosByCategory(value));
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