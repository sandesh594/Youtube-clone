import React from 'react'
import './SidebarRow.css'

function SidebarRow({icon, title,selected}) {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}  >
        <div className='sidebarRow_icon' >

        {icon}

        </div>

    

        <h2 className='sidebarRow_title'>{title}</h2>
    
        
    </div>
  )
}

export default SidebarRow