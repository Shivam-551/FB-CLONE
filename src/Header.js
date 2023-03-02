import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ForumIcon from '@material-ui/icons/Forum';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Header() {
  return (
    <div className='header'>
      <div className="header__left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qPmoR5tA7Dklvv446wuYDcHwN4FkIHU5eGFF2cHooQ&s" 
        alt="fb-logo"></img>
      <div className="header__input">
        <SearchIcon />
        <input placeholder='Search Facebook'></input>
      </div>
      </div>
      <div className="header__middle">
        <div className="header__options header__options--active" > <HomeIcon fontSize="large"/></div>
        <div className="header__options"> <FlagIcon fontSize="large" /></div>
        <div className="header__options"> <SubscriptionsOutlinedIcon  fontSize="large"/></div>
        <div className="header__options"> <StorefrontOutlinedIcon fontSize="large"/></div>
        <div className="header__options"> <SupervisedUserCircleIcon fontSize="large" /></div>
        
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar></Avatar>
          <h4>Shivam</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon/>
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon/>
        </IconButton>
        <IconButton>
          <ExpandMoreIcon/>
        </IconButton>
      </div>
    </div>
  )
}

export default Header