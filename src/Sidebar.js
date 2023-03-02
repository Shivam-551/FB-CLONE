import React from 'react';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiflagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import './Sidebar.css';
function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243__180.png" title="Shivam Arora" />
        <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center" />
        <SidebarRow Icon={EmojiflagsIcon} title="Pages" />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="MarketPlace" />
    </div> 
    
  )
}

export default Sidebar