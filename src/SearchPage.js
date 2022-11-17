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
        image='https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg'
        channel='Tech hub'
        verified
        subs='2M'
        noofvideos={456}
        discription='You can find awesome programming lessons here...
        '
        />

   
        
        <hr></hr>
        <VideoRow
        views={'1.5M views'}
        subs={'2M'}
        description={'In this FREE LIVE training, I will show you how simple it is to create an INSTAGRAM CLONE using React.js'}
        timestamp={'2hrs ago'}
        channel={'Tech hub'}
        title={'Instagram Clone'}
        image={'https://www.freecodecamp.org/news/content/images/2020/12/instagramclone.png'}
         />
         <VideoRow
        views={'1M views'}
        subs={'2M'}
        description={'In this FREE LIVE training, I will show you how simple it is to create an NETFLIX CLONE using React.js'}
        timestamp={'59 seconds ago'}
        channel={'Tech hub'}
        title={'Netflix clone'}
        image={'https://i.ytimg.com/vi/pEWZQF-iTU8/maxresdefault.jpg'}
         />
         <VideoRow
        views={'1.2M views'}
        subs={'2M'}
        description={'In this FREE LIVE training, I will show you how simple it is to create an YOUTUBE CLONE using React.js'}
        timestamp={'5 days ago'}
        channel={'Tech hub'}
        title={'Youtube clone'}
        image={'https://i.ytimg.com/vi/Z2CXN2tuAXc/maxresdefault.jpg'}
         />
         <VideoRow
        views={'1.6M views'}
        subs={'2M'}
        description={'In this FREE LIVE training, I will show you how simple it is to create an WHATSAPP CLONE using React.js'}
        timestamp={'11 days ago'}
        channel={'Tech hub'}
        title={'Whatsapp clone'}
        image={'https://i.ytimg.com/vi/cHk5Rizms5U/maxresdefault.jpg'}
         />
         <VideoRow
        views={'1k views'}
        subs={'2M'}
        description={'In this FREE LIVE training, I will show you how simple it is to create an AMAZON CLONE using React.js'}
        timestamp={'59 seconds ago'}
        channel={'Tech hub'}
        title={'Amazon clone'}
        image={'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2314367/settings_images/8rLcukJS2b8PzQDSdDjw_13-july-react-amazon-clone.png'}
         />
     
        
        </div>
  )
}

export default SearchPage