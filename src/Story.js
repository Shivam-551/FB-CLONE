import React,{useState} from 'react'
import { Avatar } from '@material-ui/core'
import './Story.css';

import StoryPlayer from './StoryPlayer';
function Story({image,profileSrc,title}) {
  const [clicked,setClicked]=useState(false);
  // const clickHandler=(e)=>{
  //   setClicked(true);
  //   console.log(clicked);
  // }
  return (
    <div>
    <div onClick={()=>{setClicked(true);}} style={{backgroundImage:`url(${image})`}} className='story'>
        <Avatar src={profileSrc} className="story__avatar"/>
        <h4>{title}</h4>
    </div>
    <div className='player'>{clicked && <StoryPlayer closeModal={setClicked} />}</div>
    </div>
  )
}

export default Story