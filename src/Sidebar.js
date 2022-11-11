import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow.js'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


function Sidebar() {
  return (
    <div className='sidebar'>

        <SidebarRow selected title='Home' icon={<HomeIcon />}/>
        <SidebarRow title='Trending' icon={<WhatshotIcon />}/>
        <SidebarRow title='Subscription' icon={<SubscriptionsIcon />}/>
        <hr></hr>
        <SidebarRow title='Library' icon={<VideoLibraryIcon />}/>
        <SidebarRow title='History' icon={<HistoryIcon />}/>
        <SidebarRow title='Your videos' icon={<OndemandVideoIcon />}/>
        <SidebarRow title='Watch Later' icon={<WatchLaterIcon />}/>
        <SidebarRow title='Liked Videos' icon={<ThumbUpIcon />}/>
        <SidebarRow title='Show more' icon={<ExpandMoreIcon />}/>
        <hr></hr>
        
    

        
        


        
        
       </div>
  )
}

export default Sidebar