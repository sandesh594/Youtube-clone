import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage_filter'>
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
            

        </div>

        <hr></hr>
        
        <ChannelRow
        image='https://img.mensxp.com/media/content/2022/Feb/Mayank-Agarwal-Talks-About-PBKS-Captaincy1200_6215c0cec5308.jpeg'
        channel='Tech hub'
        verified
        subs='2M'
        noofvideos={456}
        discription='You can find the awesome programming lessons here...
        '
        />

   
        
        <hr></hr>
        <VideoRow
        views={'1.5M views'}
        subs={'2M'}
        description={'Do you want a free online training'}
        timestamp={'2hrs ago'}
        channel={'Tech hub'}
        title={'Lets build a instagram clone'}
        image={'https://www.freecodecamp.org/news/content/images/2020/12/instagramclone.png'}
         />
         <VideoRow
        views={'1M views'}
        subs={'2M'}
        description={'Do you want a free online training'}
        timestamp={'59 seconds ago'}
        channel={'Tech hub'}
        title={'Lets build a netflix clone'}
        image={'https://i.ytimg.com/vi/pEWZQF-iTU8/maxresdefault.jpg'}
         />
         <VideoRow
        views={'1.2M views'}
        subs={'2M'}
        description={'Do you want a free online training'}
        timestamp={'5 days ago'}
        channel={'Tech hub'}
        title={'Lets build a youtube clone'}
        image={'https://i.ytimg.com/vi/Z2CXN2tuAXc/maxresdefault.jpg'}
         />
         <VideoRow
        views={'1.6M views'}
        subs={'2M'}
        description={'Do you want a free online training'}
        timestamp={'11 days ago'}
        channel={'Tech hub'}
        title={'Lets build a whatsapp clone'}
        image={'https://i.ytimg.com/vi/cHk5Rizms5U/maxresdefault.jpg'}
         />
         <VideoRow
        views={'1k views'}
        subs={'2M'}
        description={'Do you want a free online training'}
        timestamp={'59 seconds ago'}
        channel={'Tech hub'}
        title={'Lets build a amazon clone'}
        image={'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2314367/settings_images/8rLcukJS2b8PzQDSdDjw_13-july-react-amazon-clone.png'}
         />
     
        
        </div>
  )
}

export default SearchPage