
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header'
import RecommendedVideos from './RecommendedVideos'
import SearchPage from './SearchPage'
import Sidebar from './Sidebar'
import Profile from './Profile'
import { AbcOutlined } from '@mui/icons-material'
import About from './About'

function App() {
  return (

    

    <div className='app'>

      <Header />

       <Routes>
   
        <Route path='/search/:searchTerm' element={<>
        <div className='app_page'>
        <Sidebar />
        <SearchPage />


        </div>


        </>
        } />

        <Route path='/' element={ 

          <> 
          <div className='app_page'>
          <Sidebar /> 
          <RecommendedVideos />
          </div>
            
            </>
     

        } />

  </Routes>

</div>


  )
}

export default App