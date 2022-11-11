import { Avatar } from '@mui/material'
import React from 'react'
import './ChannelRow.css'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

function ChannelRow({image,channel,subs,noofvideos,discription,verified}) {
  return (
    <div className='channelRow'>
      

      <Avatar className='channelRow_logo' src={image} alt={channel}/>

      
        
        <div className='channelRow_text'>
            <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon /> }</h4>
            <p>
              {subs} subscribers . {noofvideos} videos
            </p>
            <p>{discription}</p>

            


        </div>
        
    </div>
  )
}

export default ChannelRow