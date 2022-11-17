import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {

  const[inputSearch,setInputSearch]=useState('')

  const change=(e)=>{

    setInputSearch(e.target.value)

  }

  




  return (
    <div className='header'>
      <div className='header_left'>
      <MenuIcon />

      <Link to='/'>
      <img
         className='header_logo'
         src='https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png'
         alt=''
        />

      </Link>
        

      </div>

      <div className='header_input'>
        <input value={inputSearch} placeholder='Search' type={'text'} onChange={change} />
        
        
      
        
        
        <Link className='headerlink_icon' to={`/search/${inputSearch}`}>
          <SearchIcon />
        

        </Link>
    
        

      </div>

      <div className='header_icons'>
        
      <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar src='https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg'/>
 

      </div>
        


        
        
        


    </div>
  )
}

export default Header