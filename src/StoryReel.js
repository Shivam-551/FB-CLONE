import React from 'react';
import Story from './Story';
import './StoryReel.css';
function StoryReel() {
  
  return (
    <div className='storyReel'>
        <Story image="https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363__340.jpg" profileSrc="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243__180.png" title="Shivam"></Story>
        <Story image="https://images.pexels.com/photos/87611/sun-fireball-solar-flare-sunlight-87611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" profileSrc="https://cdn.pixabay.com/photo/2013/03/01/18/40/crispus-87928_960_720.jpg" title="Karan"></Story>
        <Story image="https://cdn.pixabay.com/photo/2014/09/20/23/44/website-454460__340.jpg" profileSrc="https://media.istockphoto.com/photos/closeup-detail-of-rumex-crispus-flower-under-the-warm-summer-sun-picture-id1421313371?b=1&k=20&m=1421313371&s=170667a&w=0&h=SxSw2PMqOmxXghP2_MFIOtsF6ub4hLp_QsjSaGVt5H4=" title="Munchun"></Story>
        <Story image="https://cdn.pixabay.com/photo/2018/04/26/16/31/marine-3352341__340.jpg" profileSrc="https://media.istockphoto.com/photos/smiling-senior-active-couple-sitting-on-the-bench-in-the-park-looking-picture-id1352433578?b=1&k=20&m=1352433578&s=170667a&w=0&h=KkBOvwJAPwKLDoQm9Q24nYh2kHsLylw_89elBZZy7ls=" title="Angel Priya"></Story>
        <Story image="https://cdn.pixabay.com/photo/2018/04/26/12/14/travel-3351825__340.jpg" profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qPmoR5tA7Dklvv446wuYDcHwN4FkIHU5eGFF2cHooQ&s" title="Facebook"></Story>
    </div> 
      
  )
}

export default StoryReel