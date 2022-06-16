import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home';
import Notifications from './Notifications/Notifications';
import Messaging from './Messaging/Messaging';
import Jobs from './Jobs/Jobs';
import MyNetwork from './My-Network/MyNetwork'
import NavBar from './Nav/NavBar';

function App() {
  return (
    <Router>

      <div className='main_app'>
          <NavBar />
        <Routes>
          <Route path='/notifications' element={<Notifications />}/>
          <Route path='/messaging' element={<Messaging />}/>
          <Route path='/jobs' element={<Jobs />}/>
          <Route path='/mynetwork' element={<MyNetwork />}/>
          <Route path='/feed' element={<Home />}/>
        </Routes>
      </div>

    </Router>
  )
}

export default App